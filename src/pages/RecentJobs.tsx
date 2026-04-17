import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import JobCard from '@/components/JobCard';
import { jobs } from '@/data';

export default function RecentJobs() {
  const recentJobs = [...jobs].sort(
    (a, b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime()
  );

  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <SectionHeader
              title="الوظائف المضافة حديثاً"
              subtitle="آخر الوظائف المنشورة على المنصة"
            />
            <Link to="/jobs">
              <Button variant="outline" className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                جميع الوظائف
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentJobs.map((job, index) => (
              <JobCard key={job.id} job={job} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
