const fs = require('fs');

const fileName = process.argv[2]


if (!fileName) {
  console.error('Please provide a file name.');
  process.exit(1);
}


let FileContainer = `

import useAddMutation from "./helper/useAddMutation";
import useDeleteMutation from "./helper/useDeleteMutation";
import useGetQuery from "./helper/useGetQuery";
import useUpdateMutation from "./helper/useUpdateMutation";

const API = {
  GET: "/${fileName}",
  ADD: "/${fileName}",
  DELETE: "/${fileName}",
  UPDATE: "/${fileName}",
};

const KEY = "${fileName}";

export const useGetAll${capitalizeFirstLetter(fileName)} = (params?: any, options?: any) =>
  useGetQuery(KEY, API.GET, params, options);
export const useAdd${capitalizeFirstLetter(fileName)} = () => useAddMutation(KEY, API.ADD);
export const useUpdate${capitalizeFirstLetter(fileName)} = (params?: any) => useUpdateMutation(KEY, API.UPDATE);
export const useDelete${capitalizeFirstLetter(fileName)} = (params?: any) =>
  useDeleteMutation(KEY, API.DELETE);

`
fs.writeFileSync('src/api/' + fileName + ".ts",
  FileContainer
);

console.log(`File "${fileName}" generated successfully.`);


function capitalizeFirstLetter(word) {
  return (word).charAt(0).toUpperCase() + (word).slice(1);
}