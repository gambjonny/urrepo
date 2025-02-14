import { css } from '@urrepo/styled-system/css';
import '../index.css';
import { Badge } from '@urrepo/ui';

const App = () => {
  return (
    <div className={css({background: 'cobalt.100'})}>
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <Badge kind='outline' status='success'>loli</Badge>
    </div>
  );
};

export default App;
