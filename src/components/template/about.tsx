import { CONSTANT_TEXT } from '../../constant';
import { apiUrls } from '../../helpers/api/url';
import useQueryApi from '../../helpers/useQuery'
import Avatar from '../../public/svgs/avatar'
import { SkeletonAbout } from '../skeletonLoader';

const About = () => {

  const { isLoading, data } = useQueryApi([CONSTANT_TEXT.GET_ABOUT], apiUrls.USER_INFO);
  const bio = data?.data[0] || {};

  return (
    <div className='bg-white w-full p-4 rounded-md'>
      {isLoading ? <SkeletonAbout /> :
        <div className='flex space-x-5'>
          <Avatar />
          <div>
            <div className='text-lg capitalize'>{(bio?.first_name && bio?.last_name) || "Jane Doe"}</div>
            <div className='font-light text-sm text-basegray capitalize'>{bio?.profession || "frontend Engineer"}</div>
            <div className='mt-2'>
              <div className='text-lg'>ADDRESS</div>
              <div className='font-light text-sm text-basegray capitalize'>{([bio?.street, bio?.city, bio?.state, bio?.country])?.join(", ") || "10 deji odunuga str, lagos Nigeria"}</div>
            </div>
            <div className='mt-2'>
              <div className='text-lg'>Bio</div>
              <div className='font-light text-sm text-basegray capitalize'>
                {bio?.bio || "I'm frontend engineer with 2years experience in reactjs and nodejs"}
              </div>
            </div>
          </div>
          </div>
      }
    </div>
  )
};

export default About;