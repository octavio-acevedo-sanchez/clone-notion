const PublicLayout = ({
	children
}: {
	children: React.ReactNode;
}): React.ReactNode => {
	return <div className='f-ull dark:bg-[#1F1F1F]'>{children}</div>;
};

export default PublicLayout;
