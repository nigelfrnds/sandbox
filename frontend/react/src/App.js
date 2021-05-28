import { TabView, Tab, ChessBoard, TreeView, TreeNode, StarRating } from './components';

function App() {
  return (
    <div>
      <h1>TabView</h1>
      <TabView>
        <Tab label="Car">Has 4 wheels</Tab>
        <Tab label="Bike">Has 2 wheels</Tab>
        <Tab label="Truck">Has 6 wheels</Tab>
      </TabView>

      <h1>ChessBoard</h1>
      <ChessBoard />

      <h1>TreeView</h1>
      <TreeView>
        <TreeNode label="Car">
          <TreeNode label="Mazda">
            <TreeNode label="rx8">
              <TreeNode label="2020" />
              <TreeNode label="2021" />
              <TreeNode label="2022">
                <TreeNode label="broken" />
              </TreeNode>
            </TreeNode>
          </TreeNode>
        </TreeNode>
        <TreeNode label="Truck">
          <TreeNode label="Cargo" />
          <TreeNode label="Tow" />
        </TreeNode>
        <TreeNode label="bike" />
      </TreeView>

      <h1>StarRating</h1>
      <StarRating />
    </div>
  );
}

export default App;
