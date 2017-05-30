const React                     = require('react');
const ReactDOM                  = require('react-dom');
const UsingStyleName            = require('./UsingStyleName');
const UsingStylesProperty       = require('./UsingStylesProperty');
const UsingStylesPropertyStyles = require('./UsingStylesProperty/styles.ctr.js');

ReactDOM.render(<div>
    <UsingStyleName />
    <UsingStylesProperty styles={UsingStylesPropertyStyles} />
</div>, document.querySelector('#app'));

