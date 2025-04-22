import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";
import Card from "./Card";


//create your first component
const Home = () => {
	return (
		<>
		<Navbar />
		<div className="container">
		  <Jumbotron/>
		  <div className="row">
			<Card title="Card title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." image="https://images.pexels.com/photos/6962024/pexels-photo-6962024.jpeg" />
			<Card title="Card title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." image="https://images.pexels.com/photos/30698781/pexels-photo-30698781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
			<Card title="Card title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." image="https://images.pexels.com/photos/358457/pexels-photo-358457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
			<Card title="Card title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." image="https://images.pexels.com/photos/31727755/pexels-photo-31727755/free-photo-of-el-tranquilo-lago-ohrid-con-muelle-en-macedonia-del-norte.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
		  </div>
		</div>
		<Footer/>
	  </>
	);
};

export default Home;