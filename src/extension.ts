import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";
import {
  USE_CASE_TEMPLATE,
  ENTITY_TEMPLATE,
  REPOSITORY_TEMPLATE,
  CONTROLLER_TEMPLATE,
  TYPEORM_MODEL_TEMPLATE,
  TYPEORM_REPOSITORY_IMPL_TEMPLATE,
  DTO_TEMPLATE,
} from "./templates";
import { SERVICE_TEMPLATE } from "./templates/service";
import { SERVICE_IMPL_TEMPLATE } from "./templates/service-impl";
import { MODULE_TEMPLATE } from "./templates/module";
import {
  COMPLETE_CONTROLLER_TEMPLATE,
  COMPLETE_CREATE_DTO_TEMPLATE,
  COMPLETE_CREATE_USE_CASE_TEMPLATE,
  COMPLETE_DELETE_USE_CASE_TEMPLATE,
  COMPLETE_ENTITY_TEMPLATE,
  COMPLETE_GET_MANY_USE_CASE_TEMPLATE,
  COMPLETE_GET_USE_CASE_TEMPLATE,
  COMPLETE_MODEL_TEMPLATE,
  COMPLETE_MODULE_TEMPLATE,
  COMPLETE_REPOSITORY_IMPL_TEMPLATE,
  COMPLETE_UPDATE_DTO_TEMPLATE,
  COMPLETE_UPDATE_USE_CASE_TEMPLATE,
  COMPLETE_USE_CASE_INDEX_TEMPLATE,
} from "./templates/complete";
import { COMPLETE_REPOSITORY_TEMPLATE } from "./templates/complete/domain/complete-repository";

const toKebabCase = (input: string): string => {
  return input.replace(/([a-z])([A-Z])/g, "$1-$2").toLocaleLowerCase();
};

const createFile = async (
  uri: vscode.Uri,
  name: string,
  template: string,
  fileType: string,
  fileName: string,
  folderName?: string
) => {
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
    } else {
      vscode.window.showInformationMessage(
        `${fileName} created successfully in ${targetFolder}`
      );
    }
  });
};

const getNameInput = async (fileType: string) => {
  const name = await vscode.window.showInputBox({
    prompt: `Enter the name for the ${fileType} (In PascalCase)`,
    value: `New${fileType}`,
  });
  if (!name) {
    throw new Error("Please input a name");
  }
  return name;
};

export function activate(context: vscode.ExtensionContext) {
  let createUseCase = vscode.commands.registerCommand(
    "extension.createUseCase",
    async (uri: vscode.Uri) => {
      const fileType = "UseCase";
      const name = await getNameInput(fileType);
      createFile(uri, name, USE_CASE_TEMPLATE, fileType, `${toKebabCase(name)}.use-case.ts`);
    }
  );

  let createController = vscode.commands.registerCommand(
    "extension.createController",
    async (uri: vscode.Uri) => {
      const fileType = "Controller";
      const name = await getNameInput(fileType);
      createFile(
        uri,
        name,
        CONTROLLER_TEMPLATE,
        fileType,
        `${toKebabCase(name)}.controller.ts`
      );
    }
  );

  let createTypeOrmModel = vscode.commands.registerCommand(
    "extension.createTypeOrmModel",
    async (uri: vscode.Uri) => {
      const fileType = "Model";
      const name = await getNameInput(fileType);
      createFile(
        uri,
        name,
        TYPEORM_MODEL_TEMPLATE,
        fileType,
        `${toKebabCase(name)}.model.ts`
      );
    }
  );

  let createTypeOrmRepositoryImpl = vscode.commands.registerCommand(
    "extension.createTypeOrmRepositoryImpl",
    async (uri: vscode.Uri) => {
      const fileType = "RepositoryImpl";
      const name = await getNameInput(fileType);
      createFile(
        uri,
        name,
        TYPEORM_REPOSITORY_IMPL_TEMPLATE,
        fileType,
        `${toKebabCase(name)}.repository.impl.ts`
      );
    }
  );

  let createDto = vscode.commands.registerCommand(
    "extension.createDto",
    async (uri: vscode.Uri) => {
      const fileType = "Dto";
      const name = await getNameInput(fileType);
      createFile(uri, name, DTO_TEMPLATE, fileType, `${toKebabCase(name)}.dto.ts`);
    }
  );

  let createEntity = vscode.commands.registerCommand(
    "extension.createEntity",
    async (uri: vscode.Uri) => {
      const fileType = "Entity";
      const name = await getNameInput(fileType);
      createFile(uri, name, ENTITY_TEMPLATE, fileType, `${toKebabCase(name)}.entity.ts`);
    }
  );

  let createRepository = vscode.commands.registerCommand(
    "extension.createRepository",
    async (uri: vscode.Uri) => {
      const fileType = "Repository";
      const name = await getNameInput(fileType);
      createFile(uri, name, REPOSITORY_TEMPLATE, fileType, `${toKebabCase(name)}.repository.ts`);
    }
  );

  let createService = vscode.commands.registerCommand(
    "extension.createService",
    async (uri: vscode.Uri) => {
      const fileType = "Service";
      const name = await getNameInput(fileType);
      createFile(uri, name, SERVICE_TEMPLATE, fileType, `${toKebabCase(name)}.service.ts`);
    }
  );

  let createServiceImpl = vscode.commands.registerCommand(
    "extension.createServiceImpl",
    async (uri: vscode.Uri) => {
      const fileType = "Service impl.";
      const name = await getNameInput(fileType);
      createFile(uri, name, SERVICE_IMPL_TEMPLATE, fileType, `${toKebabCase(name)}.service.impl.ts`);
    }
  );

  let createModule = vscode.commands.registerCommand(
    "extension.createModule",
    async (uri: vscode.Uri) => {
      const fileType = "Module";
      const name = await getNameInput(fileType);
      createFile(uri, name, MODULE_TEMPLATE, fileType, `${toKebabCase(name)}.module.ts`);
    }
  );

  let createCompleteModule = vscode.commands.registerCommand(
    "extension.createCompleteModule",
    async (uri: vscode.Uri) => {
      const fileType = "Module";
      const name = await getNameInput(fileType);
      createFile(
        uri,
        name,
        COMPLETE_MODULE_TEMPLATE,
        fileType,
        `${toKebabCase(name)}.module.ts`,
        name.toLocaleLowerCase()
      );
      createFile(
        uri,
        name,
        COMPLETE_CONTROLLER_TEMPLATE,
        "Controller",
        `${toKebabCase(name)}.controller.ts`,
        `${name.toLocaleLowerCase()}/infrastructure/controllers`
      );
      createFile(
        uri,
        name,
        COMPLETE_REPOSITORY_IMPL_TEMPLATE,
        "RepositoryImpl",
        `${toKebabCase(name)}.repository.impl.ts`,
        `${name.toLocaleLowerCase()}/infrastructure/repositories`
      );
      createFile(
        uri,
        name,
        COMPLETE_MODEL_TEMPLATE,
        "Model",
        `${toKebabCase(name)}.model.ts`,
        `${name.toLocaleLowerCase()}/infrastructure/models`
      );
      createFile(
        uri,
        name,
        COMPLETE_CREATE_DTO_TEMPLATE,
        "Dto",
        `create-${toKebabCase(name)}.dto.ts`,
        `${name.toLocaleLowerCase()}/domain/dto`,
      );
      createFile(
        uri,
        name,
        COMPLETE_UPDATE_DTO_TEMPLATE,
        "Dto",
        `update-${toKebabCase(name)}.dto.ts`,
        `${name.toLocaleLowerCase()}/domain/dto`,
      );
      createFile(
        uri,
        name,
        COMPLETE_ENTITY_TEMPLATE,
        "Entity",
        `${toKebabCase(name)}.entity.ts`,
        `${name.toLocaleLowerCase()}/domain/entities`
      );
      createFile(
        uri,
        name,
        COMPLETE_REPOSITORY_TEMPLATE,
        "Repository",
        `${toKebabCase(name)}.repository.ts`,
        `${name.toLocaleLowerCase()}/domain/repositories`
      );
      createFile(
        uri,
        name,
        COMPLETE_CREATE_USE_CASE_TEMPLATE,
        "UseCase",
        `create-${toKebabCase(name)}.use-case.ts`,
        `${name.toLocaleLowerCase()}/application/use-cases`,
      );
      createFile(
        uri,
        name,
        COMPLETE_GET_USE_CASE_TEMPLATE,
        "UseCase",
        `get-${toKebabCase(name)}.use-case.ts`,
        `${name.toLocaleLowerCase()}/application/use-cases`,
      );
      createFile(
        uri,
        name,
        COMPLETE_GET_MANY_USE_CASE_TEMPLATE,
        "UseCase",
        `get-${toKebabCase(name)}s.use-case.ts`,
        `${name.toLocaleLowerCase()}/application/use-cases`,
      );
      createFile(
        uri,
        name,
        COMPLETE_UPDATE_USE_CASE_TEMPLATE,
        "UseCase",
        `update-${toKebabCase(name)}.use-case.ts`,
        `${name.toLocaleLowerCase()}/application/use-cases`,
      );
      createFile(
        uri,
        name,
        COMPLETE_DELETE_USE_CASE_TEMPLATE,
        "UseCase",
        `delete-${toKebabCase(name)}.use-case.ts`,
        `${name.toLocaleLowerCase()}/application/use-cases`,
      );
      createFile(
        uri,
        name,
        COMPLETE_USE_CASE_INDEX_TEMPLATE,
        "UseCase",
        `index.ts`,
        `${name.toLocaleLowerCase()}/application/use-cases`
      );
    }
  );

  context.subscriptions.push(
    createUseCase,
    createController,
    createTypeOrmModel,
    createTypeOrmRepositoryImpl,
    createDto,
    createEntity,
    createRepository,
    createService,
    createServiceImpl,
    createModule,
    createCompleteModule
  );
}

export function deactivate() {}
