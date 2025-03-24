import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import DataGrid from "../components/DataGrid";
import AlumniTile from "../components/AlumniTile";
import { getAlumni } from "../api/users";
import { APIResult } from "../api/requests";
import { Alumni, UserType } from "../types/User";
import { PaginatedData } from "../types/PaginatedData";

/**
 * The users should be displayed in tile cards in a grid format.
 * Make sure to use server-side pagination to fetch the alumnis
 *    that are willing to share profile.
 * In the searchbar, there should be a dropdown querying for the
 *    industry of the company that the user works in.
 */

const Connect = () => {
  const [alumni, setAlumni] = useState<PaginatedData<Alumni>>({
    page: 0,
    perPage: 10,
    total: 0,
    data: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlumni = async () => {
      setLoading(true);
      const result: APIResult<PaginatedData<Alumni>> = await getAlumni({
        page: alumni.page,
        perPage: alumni.perPage,
      });
      if (result.success) {
        setAlumni(result.data);
      } else {
        console.error(result.error); // Handle the error appropriately
      }
      setLoading(false);
    };

    fetchAlumni();
  }, [alumni.page, alumni.perPage]);

  const sampleAlumni: Alumni[] = [
    {
      _id: "1",
      email: "bill@gmail.com",
      name: "Bill Newman",
      profilePicture:
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      type: UserType.Alumni,
      linkedIn: "https://linkedin.com/bill/",
      phoneNumber: "(909) 101-2055",
      company: {
        _id: "1",
        name: "Google",
        city: "Mountain View",
        state: "CA",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
        employees: "100k+",
        industry: "Tech",
        url: "https://www.google.com",
      },
      shareProfile: true,
    },
    {
      _id: "1",
      email: "bill@gmail.com",
      name: "Bill Newman",
      profilePicture:
        "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      type: UserType.Alumni,
      linkedIn: "https://linkedin.com/bill/",
      phoneNumber: "(909) 101-2055",
      company: {
        _id: "2",
        name: "Apple",
        city: "Cupertino",
        state: "CA",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
        employees: "100k+",
        industry: "Consumer Electronics",
        url: "https://www.apple.com",
      },
      shareProfile: true,
    },
    {
      _id: "1",
      email: "bill@gmail.com",
      name: "Bill Newman",
      profilePicture:
        "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      type: UserType.Alumni,
      linkedIn: "https://linkedin.com/bill/",
      phoneNumber: "(909) 101-2055",
      company: {
        _id: "4",
        name: "Amazon",
        city: "Seattle",
        state: "WA",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        employees: "1.5M+",
        industry: "E-commerce",
        url: "https://www.amazon.com",
      },
      shareProfile: true,
    },
    {
      _id: "1",
      email: "bill@gmail.com",
      name: "Bill Newman",
      profilePicture:
        "https://cdn.iconscout.com/icon/free/png-256/free-meta-logo-icon-download-in-svg-png-gif-file-formats--messenger-chatting-social-media-pack-logos-icons-5582655.png",
      type: UserType.Alumni,
      linkedIn: "https://linkedin.com/bill/",
      phoneNumber: "(909) 101-2055",
      company: {
        _id: "5",
        name: "Meta",
        city: "Menlo Park",
        state: "CA",
        logo: "https://cdn.iconscout.com/icon/free/png-256/free-meta-logo-icon-download-in-svg-png-gif-file-formats--messenger-chatting-social-media-pack-logos-icons-5582655.png",
        industry: "Social Media",
        url: "https://about.meta.com",
      },
      shareProfile: true,
    },
    {
      _id: "1",
      email: "bill@gmail.com",
      name: "Bill Newman",
      profilePicture:
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      type: UserType.Alumni,
      linkedIn: "https://linkedin.com/bill/",
      phoneNumber: "(909) 101-2055",
      company: {
        _id: "1",
        name: "Google",
        city: "Mountain View",
        state: "CA",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
        employees: "100k+",
        industry: "Tech",
        url: "https://www.google.com",
      },
      shareProfile: true,
    },
    {
      _id: "1",
      email: "bill@gmail.com",
      name: "Bill Newman",
      profilePicture:
        "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      type: UserType.Alumni,
      linkedIn: "https://linkedin.com/bill/",
      phoneNumber: "(909) 101-2055",
      company: {
        _id: "2",
        name: "Apple",
        city: "Cupertino",
        state: "CA",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
        employees: "100k+",
        industry: "Consumer Electronics",
        url: "https://www.apple.com",
      },
      shareProfile: true,
    },
    {
      _id: "1",
      email: "bill@gmail.com",
      name: "Bill Newman",
      profilePicture:
        "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      type: UserType.Alumni,
      linkedIn: "https://linkedin.com/bill/",
      phoneNumber: "(909) 101-2055",
      company: {
        _id: "4",
        name: "Amazon",
        city: "Seattle",
        state: "WA",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        employees: "1.5M+",
        industry: "E-commerce",
        url: "https://www.amazon.com",
      },
      shareProfile: true,
    },
    {
      _id: "1",
      email: "bill@gmail.com",
      name: "Bill Newman",
      profilePicture:
        "https://cdn.iconscout.com/icon/free/png-256/free-meta-logo-icon-download-in-svg-png-gif-file-formats--messenger-chatting-social-media-pack-logos-icons-5582655.png",
      type: UserType.Alumni,
      linkedIn: "https://linkedin.com/bill/",
      phoneNumber: "(909) 101-2055",
      company: {
        _id: "5",
        name: "Meta",
        city: "Menlo Park",
        state: "CA",
        logo: "https://cdn.iconscout.com/icon/free/png-256/free-meta-logo-icon-download-in-svg-png-gif-file-formats--messenger-chatting-social-media-pack-logos-icons-5582655.png",
        industry: "Social Media",
        url: "https://about.meta.com",
      },
      shareProfile: true,
    },
    {
      _id: "1",
      email: "bill@gmail.com",
      name: "Bill Newman",
      profilePicture:
        "https://cdn.iconscout.com/icon/free/png-256/free-meta-logo-icon-download-in-svg-png-gif-file-formats--messenger-chatting-social-media-pack-logos-icons-5582655.png",
      type: UserType.Alumni,
      linkedIn: "https://linkedin.com/bill/",
      phoneNumber: "(909) 101-2055",
      company: {
        _id: "5",
        name: "Meta",
        city: "Menlo Park",
        state: "CA",
        logo: "https://cdn.iconscout.com/icon/free/png-256/free-meta-logo-icon-download-in-svg-png-gif-file-formats--messenger-chatting-social-media-pack-logos-icons-5582655.png",
        industry: "Social Media",
        url: "https://about.meta.com",
      },
      shareProfile: true,
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-6">Alumni Directory</h1>
          <p>Connect with graduates from your university</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8 ">
          <h1 className="text-2xl font-bold mb-6">Find Alumni</h1>
          <SearchBar
            selections={[
              {
                label: "Industry",
                options: [
                  "Tech",
                  "Finance",
                  "Healthcare",
                  "Retail",
                  "Software",
                  "Consumer Electronics",
                ],
              },
            ]}
            placeholder="Search by name, company, or industry"
          />
        </div>
        {/* Alumni Grid */}
        {/* Temporary Solution until we make the sidebar sticky */}
        <div className="overflow-y-auto max-h-[500px]">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <DataGrid
              data={alumni.data}
              usePagination={true}
              TileComponent={AlumniTile}
              cols={2}
              maxRows={3}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Connect;
