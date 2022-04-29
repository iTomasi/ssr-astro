# Astro Hackaton - Server Side Rendering

Helloo!, my name is Tomás and this is my first time participating in a hackathon <3

url: <a href="https://tomas-duclos-ssr-astro-hackathon.vercel.app" target="_blank">https://tomas-duclos-ssr-astro-hackathon.vercel.app</a>

**How to run this project on local?**

You need clone this project with:

```git
git clone https://github.com/iTomasi/ssr-astro-hackaton.git
```

then, go to "ssr-astr-hackaton" folder and write in the terminal

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
