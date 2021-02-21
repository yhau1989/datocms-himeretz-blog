import { Image } from 'react-datocms'
import cn from 'classnames'
import Link from 'next/link'
import Imgix from "react-imgix";
import { metaTagsFragment, responsiveImageFragment } from "../lib/fragments";

export default function CoverImage({ title, responsiveImage, slug ,urlResponsiveImage}) {

  const image = (
    (urlResponsiveImage != null && urlResponsiveImage != undefined && urlResponsiveImage.length > 0 )
     ? <Imgix src={urlResponsiveImage} imgixParams={{fm: 'jpg', fit: 'crop', w: 2000, h: 1000 }} className={cn('shadow-small', {
      'hover:shadow-medium transition-shadow duration-200': slug,
    })} />
    : <Image
      data={{
        ...responsiveImage,
        alt: `Cover Image for ${title}`,
      }}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  )


  return (
    <div className="sm:mx-0 bg-gradient-to-t from-black">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
