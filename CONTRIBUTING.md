## Contributing to Portfolio Template

Click on fork in the top left corner of your screen. Clone the repo you have been redirected to

```bash
git clone <your_username>/portfolio-template
```

### Adding env

You need to get your Unsplash API key. You can do this by following the instructions on the [Unsplash API page](https://unsplash.com/documentation#registering-your-application).

Create a `.env.local` file and paste the following-

```
UNSPLASH_API_KEY=<your_unsplash_access_key>
```

### Installing dependencies

```bash
npm i -g yarn
yarn install
```

This project is using yarn so stick to yarn

### Creating a new branch

```bash
git checkout -b <branch_name>
```

### Starting server

```bash
yarn dev
```

### Creating a PR

**Pushing the code to Github**

```
git add .
git commit -m <commit_message>
git push origin <branch
```

After pushing the code go to your repository go to your repository and now this button will be enabled.

![Open PR](https://cdn.hashnode.com/res/hashnode/image/upload/v1627311880224/BoU02D7DZ.png)

Now open a pull request.

Give a title and description and create pull request.

You have created your pull request, I will review it soon
