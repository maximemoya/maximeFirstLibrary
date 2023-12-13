# What is it ?

A demo to make TS library

ref: https://www.youtube.com/watch?v=Nh9xW2-ZOEU

# How to install :
`npm i maximefirstlibrary --save`

# How to use :
```
import { MaximeSerialize } from 'maximefirstlibrary'

MaximeSerialize.writeFileSync('./a/b/c.txt', 'test')
console.log(MaximeSerialize.readFileSync('./a/b/c.txt'));

---------------------------------------------------------

import { MaximeTime } from 'maximefirstlibrary'

console.log(MaximeTime.getActualDateTimeISO())
console.log(MaximeTime.getActualDateTimeUTC())
console.log(MaximeTime.getActualLocalDate())
console.log(MaximeTime.getActualLocalDateTimeISO())
console.log(MaximeTime.getActualLocalDateTimeObject())
console.log(MaximeTime.getActualLocalTime24())

const date1 = new Date(1900, 1, 1, 1, 1, 1)
console.log(MaximeTime.getLocalDateTimeObjectFrom(date1))

const date2 = new Date(1900, 1, 1, 1, 1, 2)
console.log(MaximeTime.getLocalDateTimeObjectFrom(date2))

console.log('is date1 before date2 according year ? ', MaximeTime.isDateBefore(date1, date2, "year"))
console.log('is date1 before date2 according month ? ', MaximeTime.isDateBefore(date1, date2, "month"))
console.log('is date1 before date2 according day ? ', MaximeTime.isDateBefore(date1, date2, "day"))
console.log('is date1 before date2 according hour ? ', MaximeTime.isDateBefore(date1, date2, "hour"))
console.log('is date1 before date2 according minute ? ', MaximeTime.isDateBefore(date1, date2, "minute"))
console.log('is date1 before date2 according second ? ', MaximeTime.isDateBefore(date1, date2, "second"))

console.log('is date2 after date1 according year ? ', MaximeTime.isDateAfter(date2, date1, "year"))
console.log('is date2 after date1 according month ? ', MaximeTime.isDateAfter(date2, date1, "month"))
console.log('is date2 after date1 according day ? ', MaximeTime.isDateAfter(date2, date1, "day"))
console.log('is date2 after date1 according hour ? ', MaximeTime.isDateAfter(date2, date1, "hour"))
console.log('is date2 after date1 according minute ? ', MaximeTime.isDateAfter(date2, date1, "minute"))
console.log('is date2 after date1 according second ? ', MaximeTime.isDateAfter(date2, date1, "second"))

console.log('is date2 equal date1 according year ? ', MaximeTime.isDateEqual(date2, date1, "year"))
console.log('is date2 equal date1 according month ? ', MaximeTime.isDateEqual(date2, date1, "month"))
console.log('is date2 equal date1 according day ? ', MaximeTime.isDateEqual(date2, date1, "day"))
console.log('is date2 equal date1 according hour ? ', MaximeTime.isDateEqual(date2, date1, "hour"))
console.log('is date2 equal date1 according minute ? ', MaximeTime.isDateEqual(date2, date1, "minute"))
console.log('is date2 equal date1 according second ? ', MaximeTime.isDateEqual(date2, date1, "second"))
```

## package.json to make a lib
```
{
  "name": "yourLibraryName",
  "version": "1.0.0",
  "description": "your first library",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "files": [
    "dist"
  ],
  "repository": {
    "type": "git",
    "url": "https://github.com/yourGithubName/yourGithubLibrary.git"
  },
  "keywords": [
    "your-lib-keywords"
  ]
}
```

## tsconfig.json to make a lib
```
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig to read more about this file */

    /* Language and Environment */
    "target": "es2016",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */

    /* Modules */
    "module": "commonjs",                                /* Specify what module code is generated. */
    
    /* Emit */
    "declaration": true,                                 /* Generate .d.ts files from TypeScript and JavaScript files in your project. */
    "sourceMap": true,                                   /* Create source map files for emitted JavaScript files. */
    "outDir": "./dist",                                  /* Specify an output folder for all emitted files. */

    /* Interop Constraints */
    "esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */
    "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */

    /* Type Checking */
    "strict": true,                                      /* Enable all strict type-checking options. */
    "noImplicitAny": true,                               /* Enable error reporting for expressions and declarations with an implied 'any' type. */
    
    /* Completeness */
    "skipLibCheck": true                                 /* Skip type checking all .d.ts files. */
  },
  "exclude": ["node_modules", "dist"],
  "include": ["src/**/*"]
}
```

