/**
 *
 * LeftMenuFooter
 *
 */

 import React from "react";

 import Wrapper from "./Wrapper";

 function LeftMenuFooter() {
   return (
     <Wrapper>
       <div className="poweredBy">
         <span>Mantido por </span>
         <a
           key="website"
           href="https://cristianovieira1.github.io/portfolio/"
           target="_blank"
           rel="noopener noreferrer"
         >
          Cristiano Borges
         </a>
       </div>
     </Wrapper>
   );
 }

 export default LeftMenuFooter;
