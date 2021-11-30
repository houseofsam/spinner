const sentence = 'hello from spinner1.js... \rheyyy\n';
const spinner = '\r|   \r/   \r-   \r\\   \r|   \r/   \r-   \r\\   \r'

let time = 100;

for (let i = 0; i < spinner.length; i++) {
  time += 200;
  setTimeout(() => process.stdout.write(spinner[i]), time);
}

setTimeout(() => process.stdout.write('\n'), time);