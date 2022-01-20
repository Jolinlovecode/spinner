let arr = ["\r|       ", "\r/       ", "\r-      ", "\r\   ", "\r       "];
let iterator = 100;
for (let item of arr){
  setTimeout(() => {
   process.stdout.write(item);
}, iterator+=500);
};
