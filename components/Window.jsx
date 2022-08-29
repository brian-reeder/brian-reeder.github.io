export default function Window({children}) {
	return (
	  <>
	    <div id="window">
		<div id="toolbar" class="flex">
		  <ul id="buttons" class="flex">
		    <li class="button close"></li>
		    <li class="button"></li>
		    <li class="button"></li>
		  </ul>
		  <p id="window-name"></p>
		  <div class="buffer"></div>
		</div>
		<div class="contents">
		  {children}
		</div>
	    </div>
	  </>
	);
}
