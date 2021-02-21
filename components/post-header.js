import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, coverImage, urlCoverImg, date, author }) {

  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">

        <CoverImage
          title={title}
          responsiveImage={ coverImage != null ? coverImage : null}
          urlResponsiveImage={urlCoverImg}
        />
      </div>
      <div className="max-w-2xl mx-auto text-right">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-sm">
          <Date dateString={date} />
        </div>
      </div>
    </>
  )
}
