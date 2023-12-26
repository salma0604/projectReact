import React from 'react'
export default class JeuDe extends React.Component{
    constructor(props) {
        super(props);
        this.state = { face: null, compteur: 0, fin: false ,img:"images/doc.png",message:"",btnmsg:"jouer"};
         }

    initialiser(){
        this.setState({ face: null, compteur: 0, fin: false ,img:"images/doc.png",message:"",btnmsg:"jouer"});
    }

    jouer() {
        const valeur = Number(Math.floor(Math.random() * 6) + 1);
        
        console.log({valeur});
        let imgface="";

        if (valeur===1) {
            imgface="images/1jeude.png";
            
        }else if (valeur===2) {
            imgface="images/2jeude.png";
            
        }else if (valeur===3){
            imgface="images/3jeude.png";
            
        }else if (valeur===4){
            imgface="images/4jeude.png";
            
        }else if (valeur===5){
            imgface="images/5jeude.png";
            
        }else if (valeur===6){
            imgface="images/6jeude.png";
            
        }
        this.setState({ face:valeur, compteur: this.state.compteur+1 ,img:imgface})
            
        if (valeur===this.props.cache) {
            this.setState({fin: true,message:"Bravo vous avez trouvez la face cachée.....",btnmsg:"initialiser"})
            
            
        }     
        console.log(this.state.fin);

        
        
    }
    render() {
        
        return(
            <>
        
        <div>
            <img src="images/doc.png" alt="" />
            <h1>Jeu de Dé</h1>
            <img src={this.state.img} alt={this.state.face} id='face'/>
            <p>Face: {this.state.face} </p>
            <p>Nombre d'essais : {this.state.compteur}</p>
            <p id='msg'>{this.state.message}</p>
            <button type='submit' onClick={()=>{
                if (this.state.fin===true) {
                     
                    this.initialiser()

                }else{
                    this.jouer()
                }
                }
                }>{this.state.btnmsg}</button>
          
            

        </div>
        </>
        )
    }
}