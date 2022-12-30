import { SkeltorCardBlog } from './SkeletorCardBlog'

export const SkeletorSwiperHomeBlogs = () => (
  <div className="grid grid-cols-1 gap-2 w-full sm:grid-cols-2 lg:grid-cols-3 mb-12">
    <SkeltorCardBlog />
    <SkeltorCardBlog ClassName="hidden sm:block" />
    <SkeltorCardBlog ClassName="hidden lg:block" />
  </div>
)
