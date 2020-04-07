<!-- Steps and requirements to build and run the CLI program -->
<!-- Incase something is not clear, kindly contact me via email or phone ndutagrace25@gmail.com 0708807403 -->

1. git clone https://github.com/ndutagrace25/currencies.git
2. Open the project directory in your editor eg vscode
3. In your terminal, run 'npm install' (run the command without the quotes). (Make sure you have node js installed in your machine)
4. From the project directory, open config folder then config.json file
5. From the config.json file set your preferred mysql database details i.e password, username and host. you can use development or production
6. Make sure your server is running (eg if you are using xampp or your preferred server make sure it's running in the background)
7. From your terminal, run 'npx sequelize-cli db:create' (run the command without the quotes) to create the database you had set in config.json file.
8. Run 'npx sequelize-cli db:migrate' (run the command without the quotes) to create the table that will hold the currency details
9. Run 'npm link' (run the command without the quotes). To link the CLI to your cmd or git bash
10. Open your window's cmd or git bash if installed.
11. Run 'country_currency --help' (run the command without the quotes). It will list all the availlable commands for the CLI you want to run
