# Node Package Manager (npm)

## Table of Contents
- [Node Package Manager (npm)](#node-package-manager-npm)
  - [Table of Contents](#table-of-contents)
  - [Initializing npm in your Project](#initializing-npm-in-your-project)
  - [Package.json File](#packagejson-file)
  - [Installing production Modules](#installing-production-modules)
  - [Gitignore](#gitignore)
  - [Installing Dev Dependencies](#installing-dev-dependencies)
  - [Scripting](#scripting)
  - [Updating Dependencies](#updating-dependencies)
  - [Removing Dependencies](#removing-dependencies)
  
## Initializing npm in your Project
To initialize npm in your project, make sure that `Node.js` is already installed, Then use the following command in the terminal-
```
npm init
```  
This creates a `package.json` file in the directory of your project, which contains the details of name of project, version, scripts, dependencies , author, etc.

## Package.json File
The `package.json` file is the soul of your project. It contains the information of project details , scripts and dependencies.

## Installing production Modules
Use the website [npmjs.org](https://www.npmjs.com/) to explore all open source node modules available on the internet. To use those modules in your package read the documentation of the respective module and then use the command-
```
npm i <name_of_the_module>
```
OR
```
npm install <name_of_the_modules>
```
For example to download the module [date-fns](https://www.npmjs.com/package/date-fns) use the following command-
```
npm i date-fns
```
This downloads all the required files of the module and creates a file name `node_module` in the directory.

## Gitignore
Create a `.gitignore` file in the directory. List all files and modules in this file which you do not want to upload to Github.

> NOTE : When you clone a Github repo, the files which are in dependencies are required to run the project, but if they are ignored in .gitignore file this problem can be solve by using the command 
> ``` npm install ``` This installs all the required dependencies of the project.

## Installing Dev Dependencies
To install the packages/modules which are used for development purposes, use the flag `-D` in the installation commands.

For example-

``` 
npm install nodemon -D
```

## Scripting
While building your project, to use some specific commands to **start** and **run** the project.

Add the scripts in the `scripts` object in `package.json`
```
"scripts" :{
  "start" : "node index.js",
  "dev" : nodemon index.js
}
```

1. The following command is used to start the project-

```
npm start
```
2. After starting the project, to run the project, use the following command-

```
npm run dev
```

## Updating Dependencies
1. To update the existing dependencies in your project use the following command-

```
npm update
```

Note that this updates **all dependencies** in the project

2. To update a particular dependency in your project use the following command-

```
npm update <name_of_the_dependency>
```

## Removing Dependencies
To remove any unused dependencies from your project use the following command
```
npm uninstall <name_of_the_dependency>
```
OR
```
npm un <name_of_the_dependency>
```
OR
```
npm rm <name_of_the_dependency>
```

Be careful! Once you use this this command the dependency will be gone from the project!