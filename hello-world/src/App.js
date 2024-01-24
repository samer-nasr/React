import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import FirstPractice from './Practice/FirstPractice';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import Lifecycle from './components/Lifecycle';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import RefsDemo from './components/RefsDemo';

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      {/* <Greet name="Samer" heroName="Batman">
        <p>This is children props</p>
      </Greet>

      <Greet name="Samir" heroName="Superman">
        <button>Click me</button>
      </Greet>
      <Greet name="Samia" heroName="Wonder Woman"/> */}

      {/* <Welcome name="Samer" heroName="Batman"/>
      <Welcome name="Samir" heroName="Superman"/>
      <Welcome name="Samia" heroName="Wonder Woman"/> */}

      {/* <Message></Message> */}

      {/* <Hello/> */}
      {/* <FunctionClick></FunctionClick> */}
      {/* <ClassClick></ClassClick> */}
      {/* <EventBind></EventBind> */}
      {/* <ParentComponent/> */}
      {/* <UserGreeting/> */}
      {/* <NameList/> */}
      {/* <StyleSheet primary={true}/> */}
      {/* <Inline/> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}

      {/* <Form/> */}
      {/* <Lifecycle/> */}

      {/* <FragmentDemo/> */}
      {/* <Table/> */}
     {/* <PureComp/> */}
      {/* <RefsDemo/> */}

      <FirstPractice name = "Samer"/>
    </div>
  );
}

export default App;
