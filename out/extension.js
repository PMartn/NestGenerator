"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const templates_1 = require("./templates");
const service_1 = require("./templates/service");
const service_impl_1 = require("./templates/service-impl");
const module_1 = require("./templates/module");
const complete_1 = require("./templates/complete");
const complete_repository_1 = require("./templates/complete/domain/complete-repository");
const toKebabCase = (input) => {
    return input.replace(/([a-z])([A-Z])/g, "$1-$2").toLocaleLowerCase();
};
const createFile = async (uri, name, template, fileType, fileName, folderName) => {
    const kebabCaseName = toKebabCase(name);
    const targetFolder = folderName
        ? path.join(uri.fsPath, folderName)
        : uri.fsPath;
    if (!fs.existsSync(targetFolder)) {
        fs.mkdirSync(targetFolder, { recursive: true });
    }
    const filePath = path.join(targetFolder, fileName);
    const fileContent = template
        .replace(/\$\[Name\]/g, name)
        .replace(/\$\[name\]/g, name.toLocaleLowerCase());
    fs.writeFile(filePath, fileContent, (err) => {
        if (err) {
            vscode.window.showErrorMessage(`Failed to create ${fileType}`);
        }
        else {
            vscode.window.showInformationMessage(`${fileName} created successfully in ${targetFolder}`);
        }
    });
};
const getNameInput = async (fileType) => {
    const name = await vscode.window.showInputBox({
        prompt: `Enter the name for the ${fileType} (In PascalCase)`,
        value: `New${fileType}`,
    });
    if (!name) {
        throw new Error("Please input a name");
    }
    return name;
};
function activate(context) {
    let createUseCase = vscode.commands.registerCommand("extension.createUseCase", async (uri) => {
        const fileType = "UseCase";
        const name = await getNameInput(fileType);
        createFile(uri, name, templates_1.USE_CASE_TEMPLATE, fileType, `${toKebabCase(name)}.use-case.ts`);
    });
    let createController = vscode.commands.registerCommand("extension.createController", async (uri) => {
        const fileType = "Controller";
        const name = await getNameInput(fileType);
        createFile(uri, name, templates_1.CONTROLLER_TEMPLATE, fileType, `${toKebabCase(name)}.controller.ts`);
    });
    let createTypeOrmModel = vscode.commands.registerCommand("extension.createTypeOrmModel", async (uri) => {
        const fileType = "Model";
        const name = await getNameInput(fileType);
        createFile(uri, name, templates_1.TYPEORM_MODEL_TEMPLATE, fileType, `${toKebabCase(name)}.model.ts`);
    });
    let createTypeOrmRepositoryImpl = vscode.commands.registerCommand("extension.createTypeOrmRepositoryImpl", async (uri) => {
        const fileType = "RepositoryImpl";
        const name = await getNameInput(fileType);
        createFile(uri, name, templates_1.TYPEORM_REPOSITORY_IMPL_TEMPLATE, fileType, `${toKebabCase(name)}.repository.impl.ts`);
    });
    let createDto = vscode.commands.registerCommand("extension.createDto", async (uri) => {
        const fileType = "Dto";
        const name = await getNameInput(fileType);
        createFile(uri, name, templates_1.DTO_TEMPLATE, fileType, `${toKebabCase(name)}.dto.ts`);
    });
    let createEntity = vscode.commands.registerCommand("extension.createEntity", async (uri) => {
        const fileType = "Entity";
        const name = await getNameInput(fileType);
        createFile(uri, name, templates_1.ENTITY_TEMPLATE, fileType, `${toKebabCase(name)}.entity.ts`);
    });
    let createRepository = vscode.commands.registerCommand("extension.createRepository", async (uri) => {
        const fileType = "Repository";
        const name = await getNameInput(fileType);
        createFile(uri, name, templates_1.REPOSITORY_TEMPLATE, fileType, `${toKebabCase(name)}.repository.ts`);
    });
    let createService = vscode.commands.registerCommand("extension.createService", async (uri) => {
        const fileType = "Service";
        const name = await getNameInput(fileType);
        createFile(uri, name, service_1.SERVICE_TEMPLATE, fileType, `${toKebabCase(name)}.service.ts`);
    });
    let createServiceImpl = vscode.commands.registerCommand("extension.createServiceImpl", async (uri) => {
        const fileType = "Service impl.";
        const name = await getNameInput(fileType);
        createFile(uri, name, service_impl_1.SERVICE_IMPL_TEMPLATE, fileType, `${toKebabCase(name)}.service.impl.ts`);
    });
    let createModule = vscode.commands.registerCommand("extension.createModule", async (uri) => {
        const fileType = "Module";
        const name = await getNameInput(fileType);
        createFile(uri, name, module_1.MODULE_TEMPLATE, fileType, `${toKebabCase(name)}.module.ts`);
    });
    let createCompleteModule = vscode.commands.registerCommand("extension.createCompleteModule", async (uri) => {
        const fileType = "Module";
        const name = await getNameInput(fileType);
        createFile(uri, name, complete_1.COMPLETE_MODULE_TEMPLATE, fileType, `${toKebabCase(name)}.module.ts`, name.toLocaleLowerCase());
        createFile(uri, name, complete_1.COMPLETE_CONTROLLER_TEMPLATE, "Controller", `${toKebabCase(name)}.controller.ts`, `${name.toLocaleLowerCase()}/infrastructure/controllers`);
        createFile(uri, name, complete_1.COMPLETE_REPOSITORY_IMPL_TEMPLATE, "RepositoryImpl", `${toKebabCase(name)}.repository.impl.ts`, `${name.toLocaleLowerCase()}/infrastructure/repositories`);
        createFile(uri, name, complete_1.COMPLETE_MODEL_TEMPLATE, "Model", `${toKebabCase(name)}.model.ts`, `${name.toLocaleLowerCase()}/infrastructure/models`);
        createFile(uri, name, complete_1.COMPLETE_CREATE_DTO_TEMPLATE, "Dto", `create-${toKebabCase(name)}.dto.ts`, `${name.toLocaleLowerCase()}/domain/dto`);
        createFile(uri, name, complete_1.COMPLETE_UPDATE_DTO_TEMPLATE, "Dto", `update-${toKebabCase(name)}.dto.ts`, `${name.toLocaleLowerCase()}/domain/dto`);
        createFile(uri, name, complete_1.COMPLETE_ENTITY_TEMPLATE, "Entity", `${toKebabCase(name)}.entity.ts`, `${name.toLocaleLowerCase()}/domain/entities`);
        createFile(uri, name, complete_repository_1.COMPLETE_REPOSITORY_TEMPLATE, "Repository", `${toKebabCase(name)}.repository.ts`, `${name.toLocaleLowerCase()}/domain/repositories`);
        createFile(uri, name, complete_1.COMPLETE_CREATE_USE_CASE_TEMPLATE, "UseCase", `create-${toKebabCase(name)}.use-case.ts`, `${name.toLocaleLowerCase()}/application/use-cases`);
        createFile(uri, name, complete_1.COMPLETE_GET_USE_CASE_TEMPLATE, "UseCase", `get-${toKebabCase(name)}.use-case.ts`, `${name.toLocaleLowerCase()}/application/use-cases`);
        createFile(uri, name, complete_1.COMPLETE_GET_MANY_USE_CASE_TEMPLATE, "UseCase", `get-${toKebabCase(name)}s.use-case.ts`, `${name.toLocaleLowerCase()}/application/use-cases`);
        createFile(uri, name, complete_1.COMPLETE_UPDATE_USE_CASE_TEMPLATE, "UseCase", `update-${toKebabCase(name)}.use-case.ts`, `${name.toLocaleLowerCase()}/application/use-cases`);
        createFile(uri, name, complete_1.COMPLETE_DELETE_USE_CASE_TEMPLATE, "UseCase", `delete-${toKebabCase(name)}.use-case.ts`, `${name.toLocaleLowerCase()}/application/use-cases`);
        createFile(uri, name, complete_1.COMPLETE_USE_CASE_INDEX_TEMPLATE, "UseCase", `index.ts`, `${name.toLocaleLowerCase()}/application/use-cases`);
    });
    context.subscriptions.push(createUseCase, createController, createTypeOrmModel, createTypeOrmRepositoryImpl, createDto, createEntity, createRepository, createService, createServiceImpl, createModule, createCompleteModule);
}
function deactivate() { }
//# sourceMappingURL=extension.js.map