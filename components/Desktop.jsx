import Link from 'next/link'
import { useRouter } from 'next/router'

function FolderElement(id, text) {
  const router = useRouter()
  const pathname = "/" + id;
  var className = "codicon codicon-folder";
  var route = id;
  if(pathname == router.pathname) {
	  className = "codicon codicon-folder-opened";
	  route = "/";
  }
  return (
	  <li id={id} class="nav-item">
            <Link href={route}>
              <a>
                <i class={className}></i>
                <p class="nav-description">{text}</p>
              </a>
            </Link>
          </li>
  );
}

export default function Desktop({children}) {

	return(
		<>
		  <ul class="nav-list">
		    {FolderElement("about-me", "About Me")}
		    {FolderElement("blog", "Blog")}
		    {FolderElement("notes", "Notes")}
		  </ul>
		  {children}

		</>
	)
}
