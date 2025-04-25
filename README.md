# CS465_FullStack
CS-465-12373-M01 Full Stack Development I 2025

## Course Reflections 
## Architecture
## Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
##Express HTML requires more communication with the backend server as the individual HTML files are referenced and created independently, through different connections on the backend and use JavaScript to handle functionality. These are the main reasons why SPAs have become more popular; they can be built with the website broken into modules that can be reused and replaced without breaking the structure of the page. Also requires less communication with the website server as the user profile will hold alot of what the user can see so information is sent based on that rather than by pages.  

## Why did the backend use a NoSQL MongoDB database?
The primary reason is speed website needs very small windows before the users lose attention, and it's better for scalability than a SQL database. Both of these needs will improve a website of an SQL database where while having more valid data, it is slower. 

## Functionality
## How is JSON different from JavaScript, and how does JSON tie together the frontend and backend development pieces?
JSON is a text-based file format that, while using JavaScript object formatting with name: value pairs, functions independently of any language and is used as a compressible transfer file format. It also works very well with api in being sent over a single data file based on the request transfers. To be metaphorical, JSON files are the letters sent between computers.

## Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.
A good example would be from the assignment we just completed, we used two different forums for updating and adding new files to the program. A refactor of that code would be to condense them into a single HTML form that we import a fields object with key-value pairs, and then perform an action upon pressing the submit button. This could help keep the forum consistent without having to re-write the HTML page every time. 

## Testing
## Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full-stack application.
In a full-stack application, security needs to be implemented from the beginning, understanding that it is much harder to implement security later than it is with it in mind at the beginning. Knowing that API requests become how the user interacts with the backend, so protecting the data will go through them, authentication, encryption, and separation api will all be needed; the more testing the better.  

## Reflection
## How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
Putting everything together that I’d been working on in various courses really helped me to feel the solidarity of the entire project from start to finish. I also saw value in the troubleshooting, throught the course and found methods for reducing the number of steps I had to take to check if my endpoints were working. I do overall think this course will help a great deal but I’d like to re-run this as a course without guidance. 
