import './CSS/Welcome.css'

const Commands = ()=>{
     return(<>
     <h2>COMMANDS</h2>
          <div className="allCommands">
              <div className="listElement">1. cd - NAVIGATE</div>
              <div className="listElement">2. help - See all Commands</div>
              <div className="listElement">3. exit - Exit the Website</div>
              <div className="listElement">4. start - Begin Showcase on current Tragectory</div>
              <div className="listElement">5. pause - Pause Showcase</div>
              <div className="listElement">6. changeMode - Change to MouseMode</div>
          </div>
     </>)
};

export default Commands;