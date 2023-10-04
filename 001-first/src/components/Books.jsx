/* eslint-disable react/jsx-no-target-blank */
import './books.css'
export default function Books() {
    return (
        <article className='books'>
          <section>
            <article className='book-container'>
              <a target="_blank" className="ancor-image" href="https://drive.google.com/file/d/1OonOQwMOTMKLTjTViqIt14Pi1l5rOBoM/view" title='JavaScript notes for professionals'>
                <img className="image-book" src="https://goalkicker.com/JavaScriptBook/JavaScriptGrow.png" alt="JavaScript notes for professionals" />
              </a>
              <section>
                <h2>JavaScript notes for professionals</h2>
                <h3>Author: StackOverflow Community</h3>
                <p>Comprises of very helpful notes on JavaScript written and compiled by a team from Stack Overflow</p>
              </section>
            </article>
            
            <article className='book-container'>
              <a target="_blank" className="ancor-image reverse" href="https://drive.google.com/file/d/1NU8xbM2d-p3ihxPga1wtH114ieDdme1-/view" title='Nodebots- JavaScript and robotics in real life'>
                <img className="image-book" src="https://d2sofvawe08yqg.cloudfront.net/nodebots-javascript-e-robotica-no-mundo-real/s_hero2x?1620553355" alt="Nodebots- JavaScript and robotics in real life" />
              </a>
              <section>
                <h2 className='reverse'>Nodebots- JavaScript and robotics in real life</h2>
                <h3>Author: Will Mendes</h3>
                <p>Robotics is another field you can use JavaScript in, which is an interesting fact in iteslef. This book takes a deep dive into the world of JavaScript and Robotics.</p>
              </section>
            </article>
            
            <article className='book-container'>
              <a target="_blank" className="ancor-image" href="https://github.com/dwyl/Javascript-the-Good-Parts-notes" title='JavaScript: The Good Parts'>
                <img className="image-book" src="https://http2.mlstatic.com/D_NQ_NP_687508-MLU69770947796_062023-O.webp" alt="JavaScript: The Good Parts" />
              </a>
              <section>
                <h2>JavaScript: The Good Parts</h2>
                <h3>Author: StackOverflow Community</h3>
                <p>Every programming language has its good parts and it’s bad parts. This book accentuates the good parts of JavaScript and reinforces the benefits of using JavaScript.</p>
              </section>
            </article>
          </section>
        </article>
    )
}