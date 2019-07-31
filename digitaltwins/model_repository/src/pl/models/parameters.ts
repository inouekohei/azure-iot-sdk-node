/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";

export const apiVersion: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};
export const expand: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "expand"
  ],
  mapper: {
    serializedName: "expand",
    defaultValue: false,
    type: {
      name: "Boolean"
    }
  }
};
export const ifMatch: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "ifMatch"
  ],
  mapper: {
    serializedName: "If-Match",
    type: {
      name: "String"
    }
  }
};
export const modelId: msRest.OperationURLParameter = {
  parameterPath: "modelId",
  mapper: {
    required: true,
    serializedName: "modelId",
    type: {
      name: "String"
    }
  }
};
export const repositoryId0: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "repositoryId"
  ],
  mapper: {
    serializedName: "repositoryId",
    type: {
      name: "String"
    }
  }
};
export const repositoryId1: msRest.OperationQueryParameter = {
  parameterPath: "repositoryId",
  mapper: {
    required: true,
    serializedName: "repositoryId",
    type: {
      name: "String"
    }
  }
};
export const xMsClientRequestId: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "xMsClientRequestId"
  ],
  mapper: {
    serializedName: "x-ms-client-request-id",
    type: {
      name: "String"
    }
  }
};