const FormRow = ({ className, children }: { className?: string, children: any }) => (
  <div className={`row ${className}`}>
    <div className="col-sm-1 col-md-2 col-lg-3 col-xl-4" />
    <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
      {children}
    </div>
    <div className="col-sm-1 col-md-2 col-lg-3 col-xl-4" />
  </div>
);

export default FormRow;
