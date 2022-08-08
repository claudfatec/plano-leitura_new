[![Azure Static Web Apps CI/CD](https://github.com/claudfatec/teste-react/actions/workflows/azure-static-web-apps-green-bay-0d3d3c003.yml/badge.svg?branch=main)](https://github.com/claudfatec/teste-react/actions/workflows/azure-static-web-apps-green-bay-0d3d3c003.yml)


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


####Instalar Google Chrome via Firefox
Autenticar no Google

####Instalar VsCode via Loja
Autenticar no VSCode


###install Docker
sudo apt-get update

sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

sudo mkdir -p /etc/apt/keyrings

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \$(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
  sudo apt-get update
  sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin



#Install nodejs Using Ubuntu
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

node --version
npm --version


###Install Github
sudo apt-get install git




####Install React & material-ui
npx create-react-app --template typescript nomedoarquivo

#Baixar projeto do Git via VSCODE
#copiar Dokerfile, docker-compose.yaml, .docker para pasta do novo projeto
#na pasta, digitar
chmod +x .docker/entrypoint
docker compose up
#entrar no container:
docker exec -it container sh
cd /home/node/app
npm install @material-ui/core --save
#ou
npm install @mui/material @emotion/react @emotion/styled --save
#copiar o restante dos arquivos do git para a pasta do novo projeto





git config --global user.email claudfatec@gmail.com
git config --global user.name claudfatec


