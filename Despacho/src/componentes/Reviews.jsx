import React from "react";

function Reviews() {
  return (
    <div className="bg-white py-24 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">Empresas que confían en nosotros</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <img className="max-h-12 mx-auto" src="https://seeklogo.com/images/A/apple-logo-E3DBF3AE34-seeklogo.com.png" alt="Apple" />
          <img className="max-h-12 mx-auto" src="https://seeklogo.com/images/H/hp-logo-EEECF99DCE-seeklogo.com.png" alt="HP" />
          <img className="max-h-12 mx-auto" src="https://seeklogo.com/images/H/hyper-x-logo-C4B6774A38-seeklogo.com.png" alt="HyperX" />
          <img className="max-h-12 mx-auto" src="https://seeklogo.com/images/L/logitech-gaming-logo-B76FC713B0-seeklogo.com.png" alt="Logitech" />
        </div>
      </div>
    </div>
  );
}

export default Reviews;
