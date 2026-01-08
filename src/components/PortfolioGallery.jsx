import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { Download } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
const PortfolioGallery = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const portfolioItems = [
    {
      id: 1,
      category: 'erp',
      title: 'Product Management Module',
      description: `
          User Stories:
          - As a user, I want to view the product list so that I can easily manage all products in the system.
          - As a user, I want to create single products and combo products so that I can support flexible sales and bundling strategies.
          - As a user, I want to update product information so that product data remains accurate and up to date.
          - As a user, I want to manage product status (active, inactive, discontinued) so that products follow their business lifecycle correctly.

          Module Overview:
          This product management module allows users to manage both single products and combo products within the ERP system. Combo products are composed of multiple standard products, enabling flexible sales strategies. The module supports product creation, updates, status management, and product listing, ensuring effective product lifecycle control and data consistency.
          `,
      images: [
        {
          src: '/img/product-list.png',
          title: 'Product List Overview'
        },
        {
          src: '/img/product-create.png',
          title: 'Create New Product'
        },
        {
          src: '/img/product-create-2.png',
          title: 'Create Product Information'
        },
        {
          src: '/img/product-update.png',
          title: 'Update Product Information'
        }
      ]
    },
    {
      id: 2,
      category: 'erp',
      title: 'Product Category Management Module',
      description: `
          User Stories:
          - As a user, I want to view the category list so that I can understand the product classification structure.
          - As a user, I want to create parent and child categories so that products can be organized hierarchically.
          - As a user, I want to update category information so that classifications remain accurate.
          - As a user, I want to delete categories so that obsolete classifications can be removed.

          Module Overview:
          This product category management module enables hierarchical organization of products using parent–child categories. It supports creating, updating, and deleting categories, improving product classification, navigation, reporting, and scalability across the ERP system.
          `
      ,
      images: [
        {
          src: '/img/category-list.png',
          title: 'Category List Overview'
        },
        {
          src: '/img/category-create.png',
          title: 'Create New Category'
        },
        {
          src: '/img/category-update.png',
          title: 'Update Category Information'
        },
      ]
    },
    {
      id: 3,
      category: 'erp',
      title: 'Product Pricing Management Module',
      description: `
        User Stories:
        - As a user, I want to view product pricing information so that I can understand current prices.
        - As a user, I want to view price history so that I can track pricing changes over time.
        - As a user, I want to add new prices for products so that pricing strategies can be adjusted when needed.

        Module Overview:
        This product pricing management module allows users to manage and track product prices over time. It supports price history tracking, adding new pricing records, and maintaining pricing accuracy. The module ensures transparency, traceability, and flexibility in pricing management within the ERP system.
        `,

      images: [
        {
          src: '/img/product-price-list.png',
          title: 'Product Price List Overview'
        },
        {
          src: '/img/product-price-detail.png',
          title: 'Product Price Details'
        },
        {
          src: '/img/product-price-create.png',
          title: 'Add New Product Price'
        }
      ]
    },
    {
      id: 4,
      category: 'erp',
      title: 'Promotion Management Module',
      description: `
          User Stories:
          - As a user, I want to view the promotion list so that I can monitor all promotional programs.
          - As a user, I want to create new promotions so that marketing campaigns can be launched.
          - As a user, I want to update promotion details so that promotions remain accurate and effective.
          - As a user, I want to define discount types, validity periods, and applicable products so that promotions are correctly applied.

          Module Overview:
          This promotion management module enables users to manage promotional programs effectively. It supports configuring promotion rules, discount types, validity periods, and applicable products, ensuring flexible marketing strategies while maintaining consistency and control within the ERP system.
          `,

      images: [
        {
          src: '/img/promotion-list.png',
          title: 'Promotion List Overview'
        },
        {
          src: '/img/promotion-create.png',
          title: 'Create New Promotion'
        },
        {
          src: '/img/promotion-list-detail.png',
          title: 'Watch Detail Promotion Information'
        }
      ]
    },
    {
      id: 5,
      category: 'erp',
      title: 'Stock Out Management Module',
      description: `
        User Stories:
        - As a user, I want to view the warehouse list so that I can select the correct warehouse for stock out operations.
        - As a user, I want to create stock out vouchers so that outgoing inventory can be recorded.
        - As a user, I want to record detailed stock out information so that inventory movements are traceable.
        - As a user, I want to track stock out transactions so that inventory data remains accurate.

        Module Overview:
        This stock out management module supports outbound inventory operations across warehouses. It allows users to create stock out vouchers, select warehouses, and record transaction details, ensuring accurate inventory tracking, traceability, and efficient warehouse management within the ERP system.
        `,
      images: [
        {
          src: '/img/warehouse-list.png',
          title: 'Warehouse List Overview'
        },
        {
          src: '/img/stock-out-create.png',
          title: 'Create Stock Out Voucher'
        },
        {
          src: '/img/stock-out-create-2.png',
          title: 'Create Stock Out Voucher'
        },
        {
          src: '/img/stock-out-create-3.png',
          title: 'Create Stock Out Voucher'
        },
      ]
    },
    {
      id: 6,
      category: 'social_media',
      title: 'Social Media Post Management Module',
      description: `
            User Stories:
            - As a user, I want to create new posts so that I can share my thoughts, images, or information with others.
            - As a user, I want to view a list of posts so that I can stay updated with the latest content from the community.
            - As a user, I want to like posts so that I can express my interest or appreciation for a post.
            - As a user, I want to comment on posts so that I can interact, discuss, and give feedback.
            - As a user, I want to report inappropriate posts or comments so that the platform remains safe and respectful.

            Module Overview:
            This social media post management module allows users to create and view posts, interact through likes and comments, and report content that violates community guidelines. The module enhances user engagement, encourages interaction, and helps maintain a healthy social media environment.
            `,
      images: [
        {
          src: '/img/post-list.png',
          title: 'Post Feed Overview'
        },
        {
          src: '/img/post-create.png',
          title: 'Create New Post'
        },
        {
          src: '/img/post-detail.png',
          title: 'Post Details with Likes and Comments'
        },
        {
          src: '/img/post-report.png',
          title: 'Report Inappropriate Content'
        }
      ]
    },
    {
      id: 7,
      category: 'social_media',
      title: 'Admin Post Management Module',
      description: `
      User Stories:
      - As an admin, I want to view all user posts so that I can monitor platform content effectively.
      - As an admin, I want to search and filter posts so that I can quickly find specific or problematic content.
      - As an admin, I want to review reported posts so that I can take appropriate moderation actions.
      - As an admin, I want to approve, hide, or delete posts so that community standards are enforced.
      - As an admin, I want to manage post comments so that inappropriate interactions can be controlled.

      Module Overview:
      This admin post management module enables administrators to monitor, moderate, and control user-generated content. It provides tools for reviewing posts and reports, managing comments, and enforcing community guidelines. The module helps ensure content quality, platform safety, and a well-governed social media environment.
      `,
      images: [
        {
          src: '/img/admin-post-list.png',
          title: 'Admin Post List Management'
        },
        {
          src: '/img/admin-post-report.png',
          title: 'Reported Posts Review'
        },
        {
          src: '/img/admin-post-detail.png',
          title: 'Admin Post Moderation Details'
        },
        {
          src: '/img/admin-post-create.png',
          title: 'Create Post as Admin'
        },
        {
          src: '/img/admin-post-update.png',
          title: 'Update Post Status (Approve / Hide / Delete)'
        }
      ]
    },
    {
      id: 8,
      category: 'social_media',
      title: 'Admin User Management Module',
      description: `
      User Stories:
      - As an admin, I want to view a list of users so that I can monitor all registered accounts on the platform.
      - As an admin, I want to search and filter users so that I can quickly find specific users.
      - As an admin, I want to view user details so that I can understand user activity and account status.
      - As an admin, I want to create new user accounts so that I can manage internal or system users.
      - As an admin, I want to update user information and roles so that access permissions are properly controlled.
      - As an admin, I want to activate, deactivate, or lock user accounts so that policy violations can be handled.
      - As an admin, I want to reset user passwords so that account access issues can be resolved.

      Module Overview:
      This admin user management module provides administrators with comprehensive tools to manage user accounts and access control. It supports viewing and searching users, managing roles and account statuses, and handling security-related actions such as password resets and account locking. The module ensures proper user governance, system security, and efficient administration.
      `,
      images: [
        {
          src: '/img/admin-user-list.png',
          title: 'Admin User List'
        },
        {
          src: '/img/admin-user-detail.png',
          title: 'Admin User Details'
        },
        {
          src: '/img/admin-user-update.png',
          title: 'Update User Account Information'
        },
        {
          src: '/img/admin-user-create.png',
          title: 'Create User Account'
        }
      ]
    },
    {
      id: 9,
      category: 'social_media',
      title: 'Admin Analytics & AI Dashboard Module',
      description: `
        User Stories:
        - As an admin, I want to view an overview dashboard so that I can quickly understand platform activity and user engagement.
        - As an admin, I want to analyze user-generated content sentiment (positive, negative, neutral) using AI so that I can assess community health.
        - As an admin, I want to view sentiment trends over time so that I can identify changes in user behavior.
        - As an admin, I want to analyze discussion topics using AI topic modeling so that I can understand what users are talking about.
        - As an admin, I want to view topic distribution statistics so that I can identify popular and emerging topics.
        - As an admin, I want to visualize data using bar charts and pie charts so that insights are easy to understand.
        - As an admin, I want to filter analytics by time range so that I can analyze data by day, week, month, or custom periods.
        - As an admin, I want to filter analytics by sentiment labels so that I can focus on positive, negative, or neutral content.
        - As an admin, I want to drill down into analytics details so that I can investigate specific posts or topics.

        Module Overview:
        This admin analytics and AI dashboard module leverages sentiment analysis and topic modeling to provide actionable insights into user-generated content. It presents statistical data through intuitive visualizations such as bar charts and pie charts, supports time-based and label-based filtering, and enables administrators to monitor trends, detect negative sentiment early, and make data-driven moderation and strategic decisions.
        `,
      images: [
        {
          src: '/img/admin-dashboard-overview.png',
          title: 'Admin Analytics Dashboard Overview'
        },
        {
          src: '/img/sentiment-analysis.png',
          title: 'AI Sentiment Analysis (Positive / Negative / Neutral)'
        },
        {
          src: '/img/sentiment-analysis-2.png',
          title: 'AI Sentiment Analysis (Positive / Negative / Neutral)'
        },
      ]
    }







  ];

  const filteredItems = activeTab === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeTab);

  const openModal = (item) => {
    setSelectedItem(item);
    setCurrentImageIndex(0);
    // Prevent body scroll when modal opens
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedItem(null);
    setCurrentImageIndex(0);
    // Re-enable body scroll when modal closes
    document.body.style.overflow = 'unset';
  };

  // Cleanup on unmount
  React.useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const selectImage = (index) => {
    setCurrentImageIndex(index);
  };

  const nextImage = () => {
    if (selectedItem) {
      setCurrentImageIndex((prev) =>
        prev === selectedItem.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedItem) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedItem.images.length - 1 : prev - 1
      );
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!selectedItem) return;

      switch (event.key) {
        case 'Escape':
          closeModal();
          break;
        case 'ArrowRight':
          nextImage(); // Gọi hàm chuyển ảnh tiếp theo của bạn
          break;
        case 'ArrowLeft':
          prevImage(); // Gọi hàm quay lại ảnh trước của bạn
          break;
        default:
          break;
      }
    };

    // Đăng ký sự kiện khi component mount hoặc selectedItem thay đổi
    window.addEventListener('keydown', handleKeyDown);

    // Quan trọng: Cleanup để tránh rò rỉ bộ nhớ khi đóng Modal
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedItem, currentImageIndex]); // dependencies đảm bảo hàm có dữ liệu mới nhất
  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
          My Portfolio
        </h2>
        <p className="text-gray-400 text-lg">Explore my creative journey</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {[
          { key: 'all', label: 'See All' },
          { key: 'erp', label: 'ERP System' },
          { key: 'social_media', label: 'Social Media Platform' },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer ${activeTab === tab.key
              ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg shadow-orange-500/50 scale-105'
              : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/70 hover:scale-105 border border-gray-700/50'
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => openModal(item)}
            className="group relative overflow-hidden rounded-2xl cursor-pointer bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={item.images[0].src || item.images[0]}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
              <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
              <div className="flex items-center gap-2 text-sm text-purple-400">
                <span>{item.images.length} images</span>
                <span>•</span>
                <span className="capitalize">{item.category}</span>
              </div>
            </div>
            {/* Gradient overlay hint */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500 pointer-events-none"></div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-5xl max-h-[85vh] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl border border-gray-700/50 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-gray-800/80 hover:bg-gray-700/80 backdrop-blur-sm border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 hover:scale-110 group"
            >
              <X className="w-6 h-6 text-gray-400 group-hover:text-red-400 transition-colors" />
            </button>

            {/* Scrollable content */}
            <div className="overflow-y-auto max-h-[85vh] custom-scrollbar">
              <div className="flex flex-col lg:flex-row gap-6 p-6 lg:p-8">
                {/* Left: Main Image */}
                <div className="lg:w-3/5 relative">
                  <div className="py-0">
                    <p className="
                    text-gray-400 text-xs italic
                    leading-relaxed mb-3
                  ">
                      <span className="text-orange-400 font-medium text-center">{selectedItem.images[currentImageIndex].title}</span>

                    </p>

                  </div>

                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900/50 border border-gray-700/30 group">
                    <div
                      className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900/50 border border-gray-700/30 group cursor-zoom-in"
                      onClick={() => setIsOpen(true)} // Click vào ảnh để phóng to
                    >
                      <img
                        src={selectedItem.images[currentImageIndex].src || selectedItem.images[currentImageIndex]}
                        alt={selectedItem.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Nút chỉ dẫn phóng to */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                        <div className="bg-black/50 p-3 rounded-full backdrop-blur-sm">
                          <Maximize2 className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                    <a
                      href={
                        selectedItem.images[currentImageIndex].src ||
                        selectedItem.images[currentImageIndex]
                      }
                      download={`${selectedItem.title}-image-${currentImageIndex + 1}`}
                      onClick={(e) => e.stopPropagation()}
                      className="
                          absolute top-3 right-3 z-10
                          p-2 rounded-xl
                          bg-gray-900/80 hover:bg-gray-800/80
                          backdrop-blur-sm
                          border border-gray-700/50 hover:border-orange-500/50
                          transition-all duration-300
                          hover:scale-110
                          opacity-0 group-hover:opacity-100
                          group
                        "
                    >
                      <Download className="w-5 h-5 text-gray-300 group-hover:text-orange-400 transition-colors" />
                    </a>

                    {/* Navigation arrows */}
                    {selectedItem.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-gray-900/80 hover:bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 transition-all duration-300 hover:scale-110 group"
                        >
                          <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-gray-900/80 hover:bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 transition-all duration-300 hover:scale-110 group"
                        >
                          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                        </button>
                      </>
                    )}
                    {/* Image counter */}
                    <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 text-sm text-gray-300">
                      {currentImageIndex + 1} / {selectedItem.images.length}
                    </div>
                  </div>


                </div>

                {/* Thêm Component Lightbox vào cuối Modal hoặc cuối Component */}
                <Lightbox
                  open={isOpen}
                  close={() => setIsOpen(false)}
                  index={currentImageIndex} // Đồng bộ với ảnh hiện tại
                  slides={selectedItem.images.map(img => ({ src: img.src || img }))}
                  plugins={[Zoom]} // Thêm tính năng Zoom
                  // Tùy chỉnh giao diện cho hợp với tone màu của bạn
                  styles={{
                    container: { backgroundColor: "rgba(0, 0, 0, .9)" },
                  }}
                  on={{
                    view: ({ index }) => setCurrentImageIndex(index) // Đồng bộ ngược lại khi chuyển ảnh trong Lightbox
                  }}
                />
                {/* Right: Info and Thumbnails */}
                <div className="lg:w-2/5 flex flex-col">
                  {/* Title and Description */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                      {selectedItem.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-3 whitespace-pre-line">
                      {selectedItem.description.split('\n').map((line, index) => {
                        if (line.trim() === 'User Stories:') {
                          return (
                            <span
                              key={index}
                              className="block mt-2 mb-1 font-semibold text-orange-400"
                            >
                              {line}
                            </span>
                          );
                        }

                        if (line.trim() === 'Module Overview:') {
                          return (
                            <span
                              key={index}
                              className="block mt-4 mb-1 font-semibold text-pink-400"
                            >
                              {line}
                            </span>
                          );
                        }

                        return (
                          <span key={index} className="block">
                            {line}
                          </span>
                        );
                      })}
                    </p>

                    <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-orange-500/20 to-pink-500/20 border border-orange-500/30 text-orange-400 text-xs font-semibold capitalize">
                      {selectedItem.category}
                    </div>
                  </div>

                  {/* Thumbnails */}
                  <div>
                    <h4 className="text-sm font-bold text-purple-400 mb-3">Gallery</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {selectedItem.images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => selectImage(index)}
                          className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-300 ${currentImageIndex === index
                            ? 'ring-2 ring-purple-500 ring-offset-2 ring-offset-gray-900 scale-95'
                            : 'hover:scale-105 opacity-70 hover:opacity-100'
                            }`}
                        >
                          <img
                            src={image.src || image}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                          {currentImageIndex === index && (
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20"></div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <style jsx>{`
            .custom-scrollbar::-webkit-scrollbar {
              width: 8px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
              background: rgba(31, 41, 55, 0.5);
              border-radius: 10px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: linear-gradient(to bottom, #8b5cf6, #ec4899);
              border-radius: 10px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: linear-gradient(to bottom, #a78bfa, #f472b6);
            }
          `}</style>
        </div>
      )}
    </div>
  );
};

export default PortfolioGallery;