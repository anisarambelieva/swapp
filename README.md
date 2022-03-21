# SWAPP (Star Wars App)

React Web Application that explores Star Wars [data from a GraphQL server](http://softuni-swapp-1283332882.eu-west-1.elb.amazonaws.com/graphql).

## Pages
### 1. Login

There is only one user. **Credentials:**
* username: admin@swapp.com
* password: Sw@pp@adm!n

![screencapture-localhost-3000-login-2022-03-21-12_53_12 (1)](https://user-images.githubusercontent.com/36369561/159247193-e5e72f43-d2fe-4891-9caa-818b01f2fb71.png)

The following routes require **authentication**. Accessible only when the user has signed in.

### 2. Episodes
`/episodes` - displays the list of episodes. When the user logs in, they are redirected to this page.

Click on the `Moon` to change the theme. (The theme is kept when refreshing the pages.)

![screencapture-localhost-3000-episodes-2022-03-21-12_37_30](https://user-images.githubusercontent.com/36369561/159244942-b253f002-0095-4859-a4de-3ee5991e732b.png)

![screencapture-localhost-3000-episodes-2022-03-21-12_37_42](https://user-images.githubusercontent.com/36369561/159244947-cb87caae-9e2a-4bc6-b20e-80a9c337060c.png)

Click on an episode to go to its page.
### 3. Episode
`/episodes/:id` - displays the data for the episode with `id`.

![screencapture-localhost-3000-episode-1-2022-03-21-12_45_41](https://user-images.githubusercontent.com/36369561/159246562-4b431223-1095-4fd3-af78-612f1e37bcdf.png)

Click on a character to go to its page.
### 4. Character
 `/characters/:id` - displays the data for the character with `id`.

![screencapture-localhost-3000-characters-14-2022-03-21-12_49_34](https://user-images.githubusercontent.com/36369561/159246658-d2685796-69e7-4cab-a122-91b281232902.png)

### 5. Characters
`/characters` - displays the list of the characters. Clicking on one redirects to its page.

![screencapture-localhost-3000-characters-2022-03-21-12_58_11](https://user-images.githubusercontent.com/36369561/159247821-8f83cac5-b951-40da-afcf-d29899996efe.png)

How to start the app? Run the following commands:
* `yarn`
* `yarn start`
