import React from 'react';
import Widget from "../components/Widget/Widget";
import { Link } from 'react-router-dom';



const WidgetPage: React.FC = () =>  {
  return (
    <div>
        <Link to="/home">← Back home</Link>
  
      <Widget />
    </div>
  );
}

export default WidgetPage;