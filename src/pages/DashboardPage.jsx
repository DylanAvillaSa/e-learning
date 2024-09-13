import { reviewFromUser } from "../data/review";
import { useState } from "react";
import { description } from "../data/description";
import PageLayout from "../components/PageLayout";
import NavigationBar from "../components/NavigationBar";
import PageContainer from "../components/PageContainer";
import ContentLayout from "../components/ContentLayout";
import ContentImage from "../components/ContentImage";
import CardLayout from "../components/CardLayout";
import CardCategory from "../components/CardCategory";
import CardTitle from "../components/CardTitle";
import CardQuestion from "../components/CardQuestion";
import CardReview from "../components/CardReview";
import NextItem from "../useHooks/NextItem";

const DashboardPage = () => {
  const [content, setContent] = useState(reviewFromUser);
  const [nextReview, setNextReview] = useState(1);

  const handleNextReview = () => {
    setNextReview((prev) => prev + 1);

    const data = content.filter((item) => item.id == nextReview);
    if (data.length !== 0 && data.length >= nextReview) {
      setContent((prev) => [...prev, ...data]);
    } else {
      setContent((prev) => [...prev, ...reviewFromUser]);
    }
  };

  return (
    <PageLayout>
      <NavigationBar />

      <PageContainer
        style='
      flex justify-around 
      items-center 
      min-h-screen'>
        <ContentLayout style='flex flex-col gap-5'>
          <h1 className='font-semibold text-secondary-dark text-4xl w-[516px]'>
            Jangan Malu Untuk Bertanya
          </h1>
          <p className='text-sm font-medium text-secondary-dark w-[451px]'>
            Cari jawaban dari pertanyaan yang kamu cari saat ini dengan mudah
            dan cepat dari seluruh dunia
          </p>

          <div className='flex gap-5'>
            <button className='bg-secondary text-white w-[130px] h-[50px] font-medium rounded-xl'>
              Daftar
            </button>
            <button className='border border-secondary text-secondary  w-[130px] h-[50px] font-medium rounded-xl'>
              Masuk
            </button>
          </div>
        </ContentLayout>

        <ContentImage src='model' />
      </PageContainer>

      <PageContainer
        style='
      flex
      justify-center
      items-center
      py-3
      min-h-screen'>
        <ContentImage
          src='model-2'
          style='w-[408px]'
        />

        <ContentLayout style='flex flex-col gap-5 justify-center w-1/2'>
          <CardTitle title='Temukan Kategori Pertanyaan Yang Kamu Cari' />
          <CardLayout>
            <CardCategory
              src='Star'
              title='SBMPTN'
              description={description.sbmptn}
            />
            <CardCategory
              src='Discovery'
              title='Pengetahuan Umum'
              description={description.pengetahuan_umum}
            />
            <CardCategory
              src='Edit'
              title='Ujian Nasional'
              description={description.ujian_nasional}
            />
            <CardCategory
              src='Paper Plus'
              title='Teknologi Informasi'
              description={description.ujian_nasional}
            />
          </CardLayout>
        </ContentLayout>
      </PageContainer>

      <PageContainer
        style='
        mt-10
      flex justify-around 
      relative
      items-start 
      min-h-screen'>
        <section className='flex flex-col gap-7'>
          <h3 className='font-medium text-[#22C58B]'>Tentang</h3>
          <h1 className='text-3xl text-secondary-dark font-semibold w-[427px]'>
            Membantu Pertanyaan Orang Lain
          </h1>
          <p className='w-[360px] font-extralight text-[16px]'>
            Mengenai semua hal pertanyaan yang mereka cari saat ini sehingga
            menemukan jawabannya
          </p>
        </section>

        <ContentImage
          src='model-3'
          style='w-[340px]'
        />
        <img
          src='/images/icon/circle.png'
          className='absolute bottom-0 left-0'
        />
      </PageContainer>

      <PageContainer
        style='
      flex flex-col justify-center gap-24
      items-center 
      min-h-screen'>
        <section className='flex flex-col gap-2 items-center'>
          <h1 className='text-2xl font-semibold text-secondary-dark'>
            Pertanyaan
          </h1>
          <p className='font-extralight text-sm text-gray-500'>
            Pertanyaan yang sering muncul
          </p>
        </section>

        <section className='flex flex-wrap gap-12'>
          <CardQuestion
            name='Dylan Avilla'
            ask='
        Apa yang dimaksud dengan IOT (Internet Of Things) dan jelaskan caranya?'
          />
          <CardQuestion
            name='Selvyadee'
            ask='
        Apa yang dimaksud dengan bahasa pemrograman javascript dan jelaskan caranya?'
          />
          <CardQuestion
            name='Vidilukman'
            ask='
        Bagaiman cara kerja asynchronus pada bahasa pemrograman javascript?'
          />
        </section>
      </PageContainer>

      <PageContainer
        style='
      flex flex-col justify-center gap-24
      overflow-hidden
      items-center 
      min-h-screen'>
        <section className='flex flex-col items-center gap-3'>
          <h1 className='text-2xl font-semibold text-secondary-dark'>Review</h1>
          <p className='font-extralight text-sm text-gray-500'>
            Lebih dari 17.000 penanya telah terbuka
          </p>
        </section>

        <section className='flex gap-24'>
          {content.length > 0 ? (
            content.map((user, index) => (
              <div
                className='relative flex'
                key={index}>
                <CardReview
                  name={user.name}
                  rate={user.rate}
                  ask={user.ask}
                />
                <NextItem handleNextReview={handleNextReview} />
              </div>
            ))
          ) : (
            <>
              <p>Review Not found! </p>
            </>
          )}
        </section>
      </PageContainer>

      <PageContainer style='mt-24'>
        <img
          src='/images/logo/footer.png'
          className='w-full h-full'
        />
      </PageContainer>
    </PageLayout>
  );
};

export default DashboardPage;
