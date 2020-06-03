# Applied InfoSec Challenges for FCC project part 2

=============================================

![GitHub package.json version][gh-pack-json-v] ![GitHub package.json dependency version express][gh-pack-json-dep-v-express] ![GitHub package.json dependency version bcrypt][gh-pack-json-dep-v-bcrypt] ![Last commit][last-commit-bdg] [![Website][website-bdg]][website] [![MIT License][license-bdg]][license] [![Twitter Follow][twitter-bdg]][twitter]
[![Workflow badge][workflow-bdg]][glitch-workflow] [![PRs Welcome][prs-bdg]][prs-site]

Created from the [FCC](https://freecodecamp.com) repository, to compile the lessons about node, express and bcrypt.

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/F1F31OD9K)

Start with an empty repository and making the git init as follows:

```shell
git init
git clone https://github.com/Estebmaister/bcrypt.git
```

Adding the files from the original repo in FCC and start to coding.

## Scripts

To install all the dependencies :

```shell
npm install
```

To run the server

```shell
npm start
```

## Challenges

### Table of Contents

1. [Understand BCrypt Hashes](#1-understand-bcrypt-ashes)
1. [Hash and Compare Passwords Asynchronously](#2-hash-and-compare-passwords-asynchronously)
1. [Hash and Compare Passwords Synchronously](#3-hash-and-compare-passwords-synchronously)

### 1. Understand BCrypt Hashes

For the following challenges, you will be working with a new starter project that is different from the previous one. You can find the new starter project on Glitch, or clone it from GitHub.

BCrypt hashes are very secure. A hash is basically a fingerprint of the original data- always unique. This is accomplished by feeding the original data into an algorithm and returning a fixed length result. To further complicate this process and make it more secure, you can also salt your hash. Salting your hash involves adding random data to the original data before the hashing process which makes it even harder to crack the hash.

BCrypt hashes will always looks like `$2a$13$ZyprE5MRw2Q3WpNOGZWGbeG7ADUre1Q8QO.uUUtcbqloU0yvzavOm` which does have a structure. The first small bit of data `$2a` is defining what kind of hash algorithm was used. The next portion `$13` defines the cost. Cost is about how much power it takes to compute the hash. It is on a logarithmic scale of 2^cost and determines how many times the data is put through the hashing algorithm. For example, at a cost of 10 you are able to hash 10 passwords a second on an average computer, however at a cost of 15 it takes 3 seconds per hash... and to take it further, at a cost of 31 it would takes multiple days to complete a hash. A cost of 12 is considered very secure at this time. The last portion of your hash `$ZyprE5MRw2Q3WpNOGZWGbeG7ADUre1Q8QO.uUUtcbqloU0yvzavOm`, looks like one large string of numbers, periods, and letters but it is actually two separate pieces of information. The first 22 characters is the salt in plain text, and the rest is the hashed password!

To begin using BCrypt, add it as a dependency in your project and require it as 'bcrypt' in your server.

**[⬆ back to top](#table-of-contents)**

### 2. Hash and Compare Passwords Asynchronously

As hashing is designed to be computationally intensive, it is recommended to do so asynchronously on your server as to avoid blocking incoming connections while you hash. All you have to do to hash a password asynchronous is call

```js
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  /* Store hash in your db */
});
```

Add this hashing function to your server(we've already defined the variables used in the function for you to use) and log it to the console for you to see! At this point you would normally save the hash to your database.

Now when you need to figure out if a new input is the same data as the hash you would just use the compare function.

```js
bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
  /* res == true or false */
});
```

Add this into your existing hash function(since you need to wait for the hash to complete before calling the compare function) after you log the completed hash and log 'res' to the console within the compare. You should see in the console a hash then 'true' is printed! If you change 'myPlaintextPassword' in the compare function to 'someOtherPlaintextPassword' then it should say false.

```js
bcrypt.hash("passw0rd!", 13, (err, hash) => {
  console.log(hash);
  //$2a$12$Y.PHPE15wR25qrrtgGkiYe2sXo98cjuMCG1YwSI5rJW1DSJp0gEYS
  bcrypt.compare("passw0rd!", hash, (err, res) => {
    console.log(res); //true
  });
});
```

Submit your page when you think you've got it right.

**[⬆ back to top](#table-of-contents)**

### 3. Hash and Compare Passwords Synchronously

Hashing synchronously is just as easy to do but can cause lag if using it server side with a high cost or with hashing done very often. Hashing with this method is as easy as calling

```js
var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
```

Add this method of hashing to your code and then log the result to the console. Again, the variables used are already defined in the server so you won't need to adjust them. You may notice even though you are hashing the same password as in the async function, the result in the console is different- this is due to the salt being randomly generated each time as seen by the first 22 characters in the third string of the hash. Now to compare a password input with the new sync hash, you would use the compareSync method:

```js
var result = bcrypt.compareSync(myPlaintextPassword, hash);`
```

with the result being a boolean true or false.

Add the function in and log the result to the console to see it working.

**[⬆ back to top](#table-of-contents)**

<!-- General links -->

[changelog]: ./CHANGELOG.md
[version-bdg]: https://img.shields.io/badge/version-1.0.0-blue.svg?style=plastic
[license]: ./LICENSE
[prs-bdg]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat
[prs-site]: (https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)
[twitter]: https://twitter.com/estebmaister
[twitter-bdg]: https://img.shields.io/twitter/follow/estebmaister?label=Follow&style=social

<!-- Repo badges links -->

[license-bdg]: https://img.shields.io/github/license/estebmaister/bcrypt?style=plastic
[last-commit-bdg]: https://img.shields.io/github/last-commit/estebmaister/bcrypt?style=plastic&logo=git&logoColor=white
[language-count-bdg]: https://img.shields.io/github/languages/count/estebmaister/bcrypt?style=plastic&logo=visual-studio-code
[top-language-bdg]: https://img.shields.io/github/languages/top/estebmaister/bcrypt?style=plastic&logo=freecodecamp
[repo-size-bdg]: https://img.shields.io/github/repo-size/estebmaister/bcrypt?style=plastic
[code-size-bdg]: https://img.shields.io/github/languages/code-size/estebmaister/bcrypt?style=plastic
[gh-pack-json-v]: https://img.shields.io/github/package-json/v/estebmaister/bcrypt?color=blue&style=plastic&logo=github
[gh-pack-json-dep-v-express]: https://img.shields.io/github/package-json/dependency-version/estebmaister/bcrypt/express?style=plastic&logo=express
[gh-pack-json-dep-v-bcrypt]: https://img.shields.io/github/package-json/dependency-version/estebmaister/bcrypt/bcrypt?style=plastic&logo=bcrypt

<!-- Glitch web and workflow -->

[website]: https://bcrypt-esteb.glitch.me
[website-bdg]: https://img.shields.io/website?down_color=violet&down_message=sleeping&label=servidor&logo=glitch&logoColor=white&style=plastic&up_color=green&up_message=online&url=https%3A%2F%2Fbcrypt-esteb.glitch.me
[workflow-bdg]: https://github.com/estebmaister/bcrypt/workflows/Glitch%20Sync/badge.svg
[glitch-workflow]: https://github.com/Estebmaister/bcrypt/blob/master/.github/workflows/main.yml
