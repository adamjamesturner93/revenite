import { useRouter } from "next/router";
import { AppLayout } from "../../components";
const WorkoutDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <AppLayout title={`Workout Details`}>
      <p>Workout: {id}</p>
    </AppLayout>
  );
};

export default WorkoutDetails;
