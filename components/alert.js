import Container from './container'
import cn from 'classnames'

export default function Alert({ preview }) {
  return (
    <div
      // className={cn('border-b', {
      //   'bg-accent-7 border-accent-7 text-white': preview,
      //   'bg-accent-1 border-accent-2': !preview,
      // })}
      className="bg-gradient-to-br from-gray-800 via-gray-900 to-black"
    >
      <Container>
        <div className="py-2 text-center text-sm">
          <span className="topLabel">
          Muy pronto podrás comprar nuestra tienda online 
          <a href="#" className="topLabel"><strong> www.himeretz.com</strong></a>
          </span>
          
          {/* {preview ? (
            <>
              This is page is showing draft content.{' '}
              <a
                href="/api/exit-preview"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Click here
              </a>{' '}
              to exit preview mode.
            </>
          ) : (
            <>
              This is page is showing published content.{' '}
              <a
                href="/api/preview"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Click here
              </a>{' '}
              to enter preview mode!
            </>
          )} */}
        </div>
      </Container>
    </div>
  )
}
