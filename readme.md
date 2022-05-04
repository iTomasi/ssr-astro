# Astro Hackaton - Server Side Rendering

Helloo!, my name is Tomás and this is my first time participating in a hackathon <3

This project is thought so that users can "generate the content" of the site: creating an account (these will be listed on the home page), modifying their profile and being able to write comments on any profile

url: <a href="https://tomas-duclos-ssr-astro-hackathon.vercel.app" target="_blank">https://tomas-duclos-ssr-astro-hackathon.vercel.app</a>

**How to run this project on local?**

You need clone this project with:

```git
git clone https://github.com/iTomasi/ssr-astro-hackathon.git
```

then, go to "ssr-astr-hackathon" folder and write in the terminal

```git
npm install
```

Before to run the project you need a PostgreSQL database and cloudinary account for some environment variables.

```env
# .env file on root folder

POSTGRES_HOST = 
POSTGRES_PORT = 
POSTGRES_USERNAME = 
POSTGRES_PASSWORD = 
POSTGRES_DB_NAME = 

PUBLIC_CLOUDINARY_CLOUD_NAME = 
PUBLIC_CLOUDINARY_UPLOAD_PRESET = 
```

once the environment variables are filled, you can run it

any questions you can contact me by discord (Tomas#7018), I will be happy to help you <3

# Routes (Pages)

There are 5 pages which can be visited, some are public and others protected

**/ (Public)** => index page which show all registered users in the database

**/profile?user=username (Public)** => profile page, the "user" query is necessary to be able to get the account data and display it

**/auth/sign-in (Protected)** => sign in page, can only be accessed if you are not logged in

**/auth/sign-up (Protected)** => sign up page, can only be accessed if you are not logged in

**/settings (Protected)** => settings page, can only be accessed if you are logged, here you can edit your account data displayed on your profile

# Preview

![sharing profile preview](https://res.cloudinary.com/itomasi/image/upload/v1651626569/Screen_Shot_2022-05-03_at_21.08.24_nz1usz.png)

When share your profile will have an og img custom with your: Name, username and profile picture. The image will be regenerated every time the account is edited.

![profile preview](https://res.cloudinary.com/itomasi/image/upload/v1651627526/Screen_Shot_2022-05-03_at_21.25.05_hliqap.png)

You can write a comment to any profile!

![Home Page](https://res.cloudinary.com/itomasi/image/upload/v1651627482/Screen_Shot_2022-05-03_at_21.24.00_otv6jq.png)

Home page
