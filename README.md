#Technical Questions
**1.	How long did you spend on the coding assignment? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.**

> Spent 5 hours on the application which included planning, developing, testing and deploying the code.
> If I am given more time to work on the application, 
> - I would include features to cache and view the past searches done by the user.
> - Improve User Experience by including transitions for all components.
> - Test the site with tools like 'SiteImprove' to make it purely WCAG compliant.


**2.	What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.**
>As for me, the most exciting new feature is `Array.prototype.flat()` in-built method in JavaScript to flatten an array.
>The previous solution to do this was to use `reduce + concat` method to flatten an array.

>Below is the snippet to show how I use the new feature compared to the old method to flatten an array.

```
const arr = [1, 2, [3, 4]]; 
 // To flat single level array 
 arr.flat(); 
 // is equivalent to 
 arr.reduce((acc, val) => acc.concat(val), []); 
 // [1, 2, 3, 4]
 ```
>This can be done for any depth.

**3.	How would you track down a performance issue in production? Have you ever had to do this?**
> - Monitor performance using browser profiling tool and narrow down to the process that takes more than acceptable performance duration.
> - Had to debug varied loads in one of my CIBC applications which caused the view to lag behind during high load days (fixed with incorporating virtualized render to speed up the UI and keep performance consistent).

**4.	How would you improve the API that you just used?**
> - Add a feature to all endpoints to send all data objects in a single page as well. While paging API results is very important, there also should be an option to disable paging.

**5.	Please describe yourself using JSON.**
```
{
  "basics":{
    "name":"Harini Prabhu",
    "label":"Full Stack Developer",
    "email":"harinikp@outlook.com",
    "summary":"A passionate developer specializing in full-stack development"
  },
  "work":[
    {
      "company":"CIBC",
      "position":"Application Developer - Full Stack",
      "website":"https://cibc.com",
      "startDate":"2018-05-01",
      "endDate":"2020-04-31",
      "summary":"Worked on various Automation projects for Capital Markets and helped with migration to Azure",
      "projects":[
        {
          "name":"EDL",
          "description":"Automating the process of delegation letters approval. End to end tracking for approval chain, with the ability to see bottlenecks and remove any delays immediately instead of relying on manual process"
        },
        {
          "name":"FRTB",
          "description":"Worked on setting up ActiveViam API and ActiveUI integrated with CIBC’s NTLM/ADFS authentication. Developed FRTB adapters that consolidates data from various job streams and APIs which in turn is utilized in ActiveViam backend."
        },
        {
          "name":"APL",
          "description":"Reporting and managing tool with advanced features like bulk upload and real-time reports for SQL Server Database for Limit Monitoring team, worked on both Front-end and back-end to facilitate the application faster."
        }
      ]
    },
    {
      "company":"Quantum View Analaytics",
      "position":"Software Developer",
      "website":"http://quantumview.ca/",
      "startDate":"2016-09-01",
      "endDate":"2018-05-31",
      "summary":"Worked on various products for financial clients",
      "projects":[
        {
          "name":"Oscar - PWA Mobile App",
          "description":"Developed a Progressive Web App (PWA – Mobile App) for a Mortgage broker company targeted towards brokers to quickly look up property information."
        },
        {
          "name":"Market Risk",
          "description":"Market Risk project for one of the big 5 banks – In partnership with ActiveViam, we developed tools and technologies with newer models to evaluate market risk, requiring new approach to meet the Basel accords requirements effectively while still enabling the capital markets divisions to continue to keep with the accelerating demands of customers and shareholders alike. "
        },
        {
          "name":"Glass SMS - BrokerLink/Intact Insurance",
          "description":"GlassSMS - Development of a custom communication solution using AWS and Twilio which converts email to SMS/MMS and the vice versa enabling easier communication between agents and customers."
        },
        {
          "name":"Web Refresh - AODA/WCAG2.0 Level AA at Metrolinx",
          "description":"Web Refresh – Refactoring the main client facing website (www.gotransit.com) such that it will adhere to the AODA guidelines (WCAG 2.0 Level AA). A fast-paced and high stakes project. "
        }
      ]
    }
  ],
  "education":[
    {
      "institution":"Anna University, India",
      "area":"Electronics and Computer Science Engineering",
      "studyType":"Bachelor",
      "startYear":"2011",
      "endYear":"2015"
    },
    {
      "institution":"George Brown College, Toronto, Canada",
      "area":"Computer Systems Technology",
      "studyType":"Post Graduate Certificate",
      "startYear":"2016",
      "endYear":"2017"
    }
  ],
  "skills":[
    {
      "languages":[
        "Javascript",
        "C#",
        "SQL",
        "Python"
      ]
    }
  ],
  "languages":[
    "English",
    "Tamil",
    "Telugu"
  ],
  "interests":[
    {
      "name":"Reading Novels",
      "keywords":[
        "Fiction",
        "Mystery",
        "Fantasy"
      ]
    },
    {
      "name":"Playing games",
      "keywords":[
        "Nintendo Switch",
        "Animal Crossing",
        "Mario Kart"
      ]
    }
  ]
}
```