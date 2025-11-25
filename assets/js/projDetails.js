$(document).ready(function() {







});


// Array of projects with full details
const projects = [
  {
    name: "PujaGhar",
    description: "Pujaghar is a digital platform designed to simplify the organization of religious ceremonies and puja services. It allows users to book priests, order puja materials, and schedule rituals seamlessly. The platform ensures transparency, convenience, and cultural preservation by connecting communities with trusted service providers while promoting traditional practices in a modern way.",
    image: "assets/images/pujathali.png",
    type: "Religious Services",
    benefits: "Easy booking, cultural preservation, trusted priest network, transparency",
    marketValue: "High demand in cultural and religious sectors across India",
    price: "₹5,000 - ₹50,000 depending on services",
    contact: "info@pujaghar.com"
  },
  {
    name: "Karmakshetra",
    description: "Karmakshetra is an employment and skill development platform that bridges the gap between job seekers and employers. It provides career guidance, training modules, and verified job listings. The platform empowers individuals to grow professionally by offering resources for skill enhancement, while helping companies find the right talent quickly and effectively.",
    image: "assets/images/karate.png",
    type: "Career & Jobs",
    benefits: "Job listings, skill training, career growth, verified opportunities",
    marketValue: "Growing demand in employment and recruitment sector",
    price: "₹1,000 subscription per user",
    contact: "support@karmakshetra.com"
  },
  {
    name: "Jaljeevan",
    description: "Jaljeevan is a water conservation and management solution aimed at promoting sustainable living. It provides tools and awareness programs for households, communities, and industries to reduce water wastage. By integrating smart monitoring systems and eco-friendly practices, Jaljeevan contributes to long-term environmental sustainability and addresses the pressing issue of water scarcity.",
    image: "assets/images/jaljeevan.png",
    type: "Environment & Sustainability",
    benefits: "Water savings, eco-friendly practices, community awareness, smart monitoring",
    marketValue: "Strong demand in urban and rural sustainability initiatives",
    price: "₹10,000 - ₹1,00,000 depending on scale",
    contact: "contact@jaljeevan.com"
  },
  {
    name: "SecurityGuard",
    description: "SecurityGuard offers smart security solutions for homes, offices, and industries. With IoT-enabled devices, 24/7 monitoring, and advanced alert systems, it ensures safety and peace of mind. The platform integrates modern technology with user-friendly controls, making it accessible for individuals and businesses seeking reliable protection against theft, intrusion, and emergencies.",
    image: "assets/images/security.png",
    type: "Safety & Security",
    benefits: "24/7 monitoring, IoT integration, peace of mind, advanced alerts",
    marketValue: "High demand in residential and corporate security sectors",
    price: "₹15,000 - ₹2,00,000 depending on package",
    contact: "sales@securityguard.com"
  },
  {
    name: "ManageHunter",
    description: "ManageHunter is a business management and analytics tool designed for entrepreneurs and startups. It helps track performance, manage resources, and analyze growth trends. With intuitive dashboards and data-driven insights, ManageHunter empowers business owners to make informed decisions, streamline operations, and achieve sustainable growth in competitive markets.",
    image: "assets/images/manage.png",
    type: "Business & Management",
    benefits: "Efficiency, data-driven decisions, growth tracking, resource management",
    marketValue: "Strong adoption among SMEs and startups",
    price: "₹5,000 per license",
    contact: "hello@managehunter.com"
  }
];




var projType = localStorage.getItem("projType");

//alert(type);

// Find project by name
const selectedProject = projects.find(
  p => p.name.toLowerCase() === projType?.toLowerCase()
);

// Inject into HTML section
// if (selectedProject) {
//   document.querySelector(".maincontent").innerHTML += `
//     <h3>${selectedProject.name}</h3>
//     <p>
//       <img src="${selectedProject.image}" alt="${selectedProject.name}" class="img-rounded pull-right" width="300">
//       ${selectedProject.description}
//     </p>
//     <p>
//       ● Type: ${selectedProject.type}<br>
//       ● Benefits: ${selectedProject.benefits}<br>
//       ● Market Value: ${selectedProject.marketValue}<br>
//       ● Price: ${selectedProject.price}<br>
//       ● Contact: ${selectedProject.contact}
//     </p>
//   `;
// }

// Inject into HTML section with colorful table
// Inject into HTML section with elegant grey table + animation
if (selectedProject) {
  document.querySelector(".maincontent").innerHTML += `
    <div class="project-card" style="margin-top:30px; animation: fadeIn 1.2s ease;">
      <h3 style="color:#f1f1f1; font-weight:bold; border-bottom:2px solid #555; padding-bottom:5px;transition:transform 0.3s ease;"
 		onmouseover="this.style.transform='scale(1.05)';" onmouseout="this.style.transform='scale(1)';"
      >
        ${selectedProject.name}
      </h3>
      <p>
        <img src="${selectedProject.image}" alt="${selectedProject.name}" 
             class="img-rounded pull-right" width="280"
             style="border:2px solid #666; border-radius:8px; margin:10px; transition:transform 0.3s ease;"
             onmouseover="this.style.transform='scale(1.05)';" 
             onmouseout="this.style.transform='scale(1)';">
        ${selectedProject.description}
      </p>
      <table class="table table-bordered" 
             style="background-color:#1c1c1c; color:#ddd; border:1px solid #444; border-radius:6px; overflow:hidden;">
        <tbody>
          <tr style="background-color:#2c2c2c; font-weight:bold;">
            <td>Type</td>
            <td>${selectedProject.type}</td>
          </tr>
          <tr>
            <td>Benefits</td>
            <td>${selectedProject.benefits}</td>
          </tr>
          <tr style="background-color:#2c2c2c;">
            <td>Market Value</td>
            <td>${selectedProject.marketValue}</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>${selectedProject.price}</td>
          </tr>
          <tr style="background-color:#2c2c2c;">
            <td>Contact</td>
            <td>${selectedProject.contact}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <style>
      /* Fade-in animation */
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      /* Table hover effect */
      .table tbody tr:hover {
        background-color: #333 !important;
        transition: background-color 0.3s ease;
      }
    </style>
  `;
}
