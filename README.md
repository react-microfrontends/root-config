# React root-config

[![CircleCI](https://circleci.com/gh/react-microfrontends/root-config.svg?style=svg)](https://circleci.com/gh/react-microfrontends/root-config)

## What is this?

This is an example microfrontend repo demonstrating how to use [single-spa](https://single-spa.js.org). You can see the code running at https://react.microfrontends.app.

## How does it work?

[Full article](https://single-spa.js.org/docs/recommended-setup)

This repository is a javascript project that creates a javascript bundle that is an in-browser javascript module (explanation on [youtube](https://www.youtube.com/watch?v=Jxqiu6pdMSU&list=PLLUD8RtHvsAOhtHnyGx57EYXoaNsxGrTU&index=2) / [bilibili](https://www.bilibili.com/video/av83498486/)). The currently deployed version of the in-browser module can be seen at https://react.microfrontends.app/importmap.json.

This project uses [React](https://reactjs.org) and was created with the [create-single-spa](https://single-spa.js.org/docs/create-single-spa) CLI. It uses webpack and babel.

Whenever a pull request is merged to main, [CircleCI builds and deploys the project](https://circleci.com/gh/react-microfrontends/root-config). The ["workflows" view](https://circleci.com/gh/react-microfrontends/workflows) (pictured below) can be seen if you are logged into CircleCI. Deployments for this in-browser module are completely independent of deployments for any other module.

![image](https://user-images.githubusercontent.com/5524384/75210801-5ba02700-573f-11ea-8064-46af165cba0a.png)

## Local development

[Full documentation](https://single-spa.js.org/docs/recommended-setup#local-development)

Tutorial video: [youtube](https://www.youtube.com/watch?v=vjjcuIxqIzY&list=PLLUD8RtHvsAOhtHnyGx57EYXoaNsxGrTU&index=4) / [bilibili](https://www.bilibili.com/video/av83617789/)

```sh
git clone https://github.com/react-microfrontends/root-config.git
cd root-config
yarn install
yarn start
open http://localhost:9000
```

## Adapting for your organization

Feel free to fork and modify any files you would like when doing a proof of concept for your organization. When it's time to actually create / adapt your organization's projects, consider using [create-single-spa](https://single-spa.js.org/docs/create-single-spa) instead of forking this repository.
