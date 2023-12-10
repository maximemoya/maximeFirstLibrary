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

import { MaximeTime } from 'maximefirstlibrary'
console.log(MaximeTime.getActualLocalDateTimeISO())
console.log(MaximeTime.getActualLocalDateTime())
console.log(MaximeTime.getActualLocalDate())
console.log(MaximeTime.getActualLocalTime())
console.log(MaximeTime.getActualDateTimeISO())
console.log(MaximeTime.getActualDateTimeUTC())
```
