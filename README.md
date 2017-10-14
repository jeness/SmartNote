# SmartNote
This project will have the following features.

Note-taking made easy: SmartNote incorporates a clean and intuitive interface, the TinyMCE rich-text editor and a dedicated markdown editor, making your writing/typing more efficient and enjoyable. This will greatly benefit programmer. You never need to bother about format changing when copy and paste code in your old-style notebook. Programmers should make programmers' life easier.

Knowledge management: The flexible and versatile notebook-note-tagging system of SmartNote makes it an ideal tool for knowledge management

Sharing: Share your knowledge, thoughts and experiences with friends via Leanote. Invite your friends to join your notepad in the cloud.

# Tools Needed
1. Node.js for installing json-server
    <br/> npm install -g json-server<br/>
2.  Angular CLI to automate the development workflow.
     <br/> npm install -g @angular/cli<br/>
        
# How To Run The Application 
0. Open the project in Visual Studio Code.
1. Open the integrated terminal using ctrl + `(the backtick located on the same key as ~)and navigate root of the application.
2. Run the following command to build the application and start a web serve. http://localhost:4200/login will be loaded automatically.
    <br/>ng serve -o<br/>
3. Open a new terminal to set up a mock back-end.
    <br/>npm run json-server<br/>
   We now have a REST API listening on port 3000.
4. Go to the application login page opened in step 2 at http://localhost:4200/login and enter username and password.
5. Start taking notes and try all the functionalities there.
6. You can check GET, PUT, DELETE, POST requests from the terminal opened in step 3.
    
