
import './App.css';
import AprovelCard from './AprovelCard';


import CommentDetails from './CommentDetails';
function App() {
  return (
    <div className="ui container comments">
     <AprovelCard>
      <CommentDetails
       auther="sruthi" 
       timeago="Today at 2:00AM" 
       content="Who says you are not beautiful"
        />
        </AprovelCard>
        <AprovelCard>
      <CommentDetails 
      auther="pooja" 
      timeago="Today at 4:30PM" 
      content="Life is fair if we make it" 
      />
      </AprovelCard>
      <AprovelCard>
      <CommentDetails 
      auther="Remya"
       timeago="Today at 6:30AM" 
       content="Respect yourself at any circumstances" 
       />
       </AprovelCard>




    </div>
  );
}

export default App;
