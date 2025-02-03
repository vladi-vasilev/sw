# Task: Build a Responsive Login Form with Data Table  
# Description:  
You are tasked with creating a responsive login form and a subsequent data table page in a React application. The login  form should include simple validation for the username and password inputs. Upon successful validation, the user should  be redirected to a page displaying a table populated with data from the Star Wars API.  
Requirements:  

# Login Form:  
• Create a responsive login form with two input fields: one for the username and another for the password.  • Implement basic validation to ensure that neither the username nor the password fields are empty and include  between 4 to 30 characters.  
# Login Button: 
• Include a login button that should be disabled when the validation is not successful.  
# React-Router Navigation:  
• Utilize react-router-dom for navigation.  
• Upon successful login, navigate the user to a new page (e.g., "/table").  
# Data Table Page:  
• Create a new page ("/table") that displays a table.  
• Fetch data from the Star Wars API (https://swapi.py4e.com/api/people ) to populate the table.  • Display the following fields from each object in the API response: name, mass, height, hair color, and skin color.  
• Implement basic pagination for the table. 
# Table Design:  
• Design the table to be visually appealing and responsive.  
# Features: 
• Loading State: Display a loading state while fetching data from the API.  
• Table: implement a basic caching mechanism using the browsers build in local storage (include a simple cache  validation logic as well). 
• Error Handling: Implement error handling for failed API requests.  
• Implement a feature that will notify the user if his connection is down displaying a modal with an image inside  (should be simulated/tested via the dev-tools network options when the user’s browser makes a fetch request) 
