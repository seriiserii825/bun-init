import {$} from "bun";

console.log(`Let's add some numbers!`);
showMenu();

for await (const line of console) {
  switch (line) {
    case "1":
      add(1, 2);
    break;
    case "2":
      console.log("Subtract");
    break;
    case "3":
      console.log("Multiply");
    break;
    default:
      console.error(`Invalid option: ${line}`);
    break;
  };
  showMenu();
}

function add(a: number, b: number): void {
  console.log(`Adding ${a} and ${b}`);
  console.log(`Result: ${a + b}`);
}

function showMenu(){
  console.write(`Select menu: 
  1. Add 
  2. Subtract 
  3. Multiply >`);
}
