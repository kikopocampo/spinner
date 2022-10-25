const lines = "|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\";
let delay = 100;
for (const line of lines) {
  setTimeout(() => {
    process.stdout.write('\r' + line + '  ');
  }, delay);
  delay += 100;
}