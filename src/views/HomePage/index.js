import React,{Fragment} from 'react';
import './index.css';

export default () => (
    <Fragment className="main">
        <div className="bgimg-1">
            <div className="caption">
                <span className="border">FOTO 1</span>
            </div>
        </div>

        <div style={{color:'FFFFF', backgroundcolor:'white', textalign:'center, justify'}}>
            <h3 style={{textalign:'center' }}>Parallax Demo</h3>
            <p>Parallax scrolling is a web site trend where the background content is moved at a different speed than the foreground content while scrolling. Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed posuere mollis ullamcorper libero ante lectus, blandit pellentesque a, magna turpis est sapien duis blandit dignissim. Viverra interdum mi magna mi, morbi sociis. Condimentum dui ipsum consequat morbi, curabitur aliquam pede, nullam vitae eu placerat eget et vehicula. Varius quisque non molestie dolor, nunc nisl dapibus vestibulum at, sodales tincidunt mauris ullamcorper, dapibus pulvinar, in in neque risus odio. Accumsan fringilla vulputate at quibusdam sociis eleifend, aenean maecenas vulputate, non id vehicula lorem mattis, ratione interdum sociis ornare. Suscipit proin magna cras vel, non sit platea sit, maecenas ante augue etiam maecenas, porta porttitor placerat leo.</p>
        </div>

        <div className="bgimg-2">
            <div className="caption">
                <span className="border" >FOTO 2</span>
            </div>
        </div>

        <div style={{position:'relative'}}>
            <div style={{color:'#ddd', backgroundcolor:'#282E34', textalign:'center justify', padding:'50px 80px'}}>
                <p>Scroll up and down to really get the feeling of how Parallax Scrolling works.</p>
            </div>
        </div>

        <div className="bgimg-3">
            <div className="caption">
                <span className="border" >FOTO 3</span>
            </div>
        </div>

        <div style={{position:'relative'}}>
            <div style={{color:'#ddd', backgroundcolor:'#282E34', textalign:'center justify', padding:'50px 80px'}}>
                <p>Scroll up and down to really get the feeling of how Parallax Scrolling works.</p>
            </div>
        </div>

        <div className="bgimg-1">
            <div className="caption">
                <span className="border">COOL!</span>
            </div>
        </div>
    </Fragment>
)