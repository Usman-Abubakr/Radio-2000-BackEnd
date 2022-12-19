# **Implementation**
#### **Q) What libraries did you add to the application? What are they used for?**
- Express: Node web framework for building web applications, in this case, used to create REST API's.
- Firebase/Firestore: Online database used to store stations and users remotely.

#### **Q) What's the command to start the application locally?**
- Run `node .` or `node index.js` in the directory (Radio-2000-BackEnd folder)



# **General**
#### **Q) If you had more time, what further improvements or new features would you add?**
- I would implement unit testing and a migration tool. In the limited time it was out of scope, however it would be beneficial for the application in the long term. 
- Other features not added due to time were the other CRUD functions; update and delete, these would help complete the functions and make this project more viable to be used professionally.
- Having a basic input form for the 'create' functions would help with testing, for example if testing on a mobile browser, POSTMAN would not be available.


#### **Q) Which parts are you most proud of? And why?**
- Getting the application to work on Vercel. I had originally tried Surge.sh however realised it does not support functions, unlike Vercel which supports serverless functions. It is also my first time hosting API online and getting it to work on my phone was exciting.

#### **Q) Which parts did you spend the most time with? What did you find most difficult?**
- Getting the application to work on Vercel. It's both my proudest and most difficult accomplishment in this test. It required a lot of file and code changes. When I first implemented it, it worked without much effort with a predefined data set within the project. However, it only worked until I implemented Firestore access, after which I spent most of the time solving and ending up going over the 2 hours.

#### **Q) How did you find the test overall? Did you have any issues or have difficulties completing?If you have any suggestions on how we can improve the test, we'd love to hear them.**
- Easy to understand and all the information was provided. Being my first time creating API's and deploying to the web, I found the experience very fun and stimulating. I am grateful that this sort of test was chosen over the usual basic test given by companies, as it's more alike to being at work and you get to know us and our work better, very fitting for a company that values its people.