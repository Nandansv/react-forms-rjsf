import { JSONSchema7 } from "json-schema";

export const sampleSchema: JSONSchema7 = {
    "title": "New Account",
    "description": "Account Creation Form",
    "type": "object",
    "properties": {
        "accountType" :
        {
            "type": "number",
            "anyOf": [
              {
                "type": "number",
                "title": "one",
                "enum": [
                  1
                ]
              },
              {
                "type": "number",
                "title": "two",
                "enum": [
                  2
                ]
              },
              {
                "type": "number",
                "title": "three",
                "enum": [
                  3
                ]
              }
            ]
          },
        "name": {
            "type": "string"
        },
        "legalBusinessName": {
            "type": "string"
        },
        "taxId": {
            "type": "string"
        },
        "shortDescription": {
            "type": "string"
        },
        "longDescription" :{
            "type": "string"
        }
    }
    
};
