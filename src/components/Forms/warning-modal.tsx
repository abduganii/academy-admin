

export default function WarningModal() {
    useEffect(() => {
        // Check if form has unsaved changes
        const hasChanges = Object.keys(formik.values).some(
          (key) => formik.values[key] !== formik.initialValues[key]
        );
        setIsFormDirty(hasChanges);
      }, [formik.values]);
    
      useEffect(() => {
        // Warn the user before unloading the page
        const handleBeforeUnload = (e: BeforeUnloadEvent) => {
          if (isFormDirty) {
            const message = 'You have unsaved changes. Are you sure you want to leave?';
            e.returnValue = message; // Standard for most browsers
            return message; // For some browsers
          }
        };
    
        window.addEventListener('beforeunload', handleBeforeUnload);
    
        return () => {
          window.removeEventListener('beforeunload', handleBeforeUnload);
        };
      }, [isFormDirty]);
  return (
    <div>warning-modal</div>
  )
}
